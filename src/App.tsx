import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sparkles, ArrowUp, ShoppingBag, CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Product, CartItem, CakeCustomization } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cakiebakie_cart_v1');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Error loading cart', e);
    }
    
    // Simulate luxury boutique loading experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Sync cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('cakiebakie_cart_v1', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart', e);
    }
  }, [cartItems]);

  // Handle Scroll Observer to update current navigation tab dynamically
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button visibility
      setShowScrollTop(window.scrollY > 400);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.18, rootMargin: '-80px 0px 0px 0px' }
    );

    const sections = ['home', 'about', 'menu', 'gallery', 'why-us', 'testimonials', 'faq', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Show customized toast message
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Add Item to Bag
  const handleAddToBag = (product: Product, quantity = 1, customization?: CakeCustomization) => {
    setCartItems((prevItems) => {
      // For designer custom cakes, we always treat them as unique line items
      if (customization) {
        triggerToast(`Added customized ${product.name} to your shopping bag!`);
        return [...prevItems, { product, quantity, cakeCustomization: customization }];
      }

      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        triggerToast(`Increased quantity of ${product.name} in bag!`);
        return updated;
      }

      triggerToast(`Added ${product.name} to your shopping bag!`);
      return [...prevItems, { product, quantity }];
    });
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  // Remove Item from Cart
  const handleRemoveItem = (productId: string) => {
    const itemToRemove = cartItems.find((item) => item.product.id === productId);
    if (itemToRemove) {
      triggerToast(`Removed ${itemToRemove.product.name} from your bag.`);
    }
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear entire Cart
  const handleClearCart = () => {
    setCartItems([]);
    triggerToast('All items cleared from shopping bag.');
  };

  // Smooth scroll helper
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const cartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      {/* 1. Elegant Loading Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#3E2723] flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Premium Rotating gold ring loader */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  className="w-20 h-20 rounded-full border-2 border-amber-400/20 border-t-amber-400"
                />
                <Sparkles className="h-8 w-8 text-amber-400 absolute animate-pulse" />
              </div>
              <div className="text-center">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-white">
                  CakieBakie
                </h2>
                <span className="text-[10px] tracking-widest uppercase font-mono text-rose-400 font-bold block mt-1.5 animate-pulse">
                  Artisan Pastry House
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Site Body */}
      <div className="min-h-screen bg-[#FDFBF7] text-amber-950 selection:bg-rose-100 selection:text-rose-950 font-sans">
        
        {/* Navigation */}
        <Navbar
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          activeSection={activeSection}
        />

        {/* Sections */}
        <Hero onOrderNowClick={scrollToMenu} onViewMenuClick={scrollToMenu} />
        <About />
        <Menu onAddToBag={handleAddToBag} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Shopping Cart Drawer */}
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* Toast Notification HUD */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -20, x: '-50%' }}
              className="fixed top-24 left-1/2 z-50 px-5 py-3.5 bg-amber-950/95 backdrop-blur-md text-white rounded-2xl shadow-xl border border-white/10 flex items-center gap-2.5 max-w-sm w-[90%]"
            >
              <CheckCircle2 className="h-5 w-5 text-rose-400 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold font-sans">{toastMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll To Top Action Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-30 p-3.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl hover:shadow-rose-500/30 transition-all hover:-translate-y-1 active:scale-90"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
