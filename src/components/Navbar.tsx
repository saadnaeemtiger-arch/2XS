import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeSection: string;
}

export default function Navbar({ cartCount, onCartClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-amber-50/90 backdrop-blur-md shadow-md py-3 border-b border-amber-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-3.5" onClick={() => scrollToSection('#home')}>
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-xl font-bold shadow-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-[#3E2723] leading-none">
                  CakieBakie
                </span>
                <span className="block text-[9px] tracking-widest uppercase font-mono text-[#D4AF37] font-bold mt-1 leading-none">
                  Artisan Bakery
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-rose-500 text-white font-semibold shadow-sm'
                        : 'text-amber-900 hover:text-rose-600 hover:bg-rose-50/60'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Cart & Mobile menu button */}
            <div className="flex items-center gap-4">
              <button
                id="cart-trigger"
                onClick={onCartClick}
                className="relative p-2.5 rounded-full text-amber-900 hover:bg-rose-100/60 hover:text-rose-600 transition-colors focus:outline-none"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="h-6 w-6" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1 -translate-y-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full shadow-md min-w-[20px] h-[20px]"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full text-amber-900 hover:bg-rose-100/60 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-amber-50 border-b border-amber-100 overflow-hidden shadow-inner"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-rose-500 text-white font-semibold'
                          : 'text-amber-900 hover:bg-rose-50 hover:text-rose-600'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCartClick();
                  }}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 border border-rose-200 rounded-xl text-base font-semibold text-rose-600 bg-rose-50/50 hover:bg-rose-100 transition-all"
                >
                  <ShoppingBag className="h-5 w-5" />
                  View Bag ({cartCount} items)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
