import { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, ShoppingBag, CheckCircle2, Sliders, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Category, CakeCustomization } from '../types';
import { PRODUCTS } from '../data';

interface MenuProps {
  onAddToBag: (product: Product, quantity: number, customization?: CakeCustomization) => void;
}

const CATEGORIES: Category[] = [
  'Custom Cakes',
  'Birthday Cakes',
  'Wedding Cakes',
  'Cupcakes',
  'Cookies',
  'Donuts',
  'Cheesecakes',
  'Brownies',
  'Macarons',
  'Fresh Bread',
  'Croissants',
  'Muffins'
];

export default function Menu({ onAddToBag }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom Cake Designer State
  const [tiers, setTiers] = useState<number>(2);
  const [flavor, setFlavor] = useState('Vanilla Bean Sponge');
  const [frosting, setFrosting] = useState('Creamy Vanilla Buttercream');
  const [hasGoldLeaf, setHasGoldLeaf] = useState(true);
  const [hasFlowers, setHasFlowers] = useState(true);
  const [inscription, setInscription] = useState('');
  const [designerSuccess, setDesignerSuccess] = useState(false);

  // Custom Cake Cost Calculation
  const customCakePrice = useMemo(() => {
    let base = 80; // 1 tier base
    if (tiers === 2) base += 100;
    if (tiers === 3) base += 220;

    if (hasGoldLeaf) base += 25;
    if (hasFlowers) base += 15;

    return base;
  }, [tiers, hasGoldLeaf, hasFlowers]);

  // Handle adding custom cake to cart
  const handleAddCustomCake = () => {
    const customCakeProduct: Product = {
      id: `custom-designer-${Date.now()}`,
      name: `Bespoke Designer Cake (${tiers} Tiers)`,
      description: `${tiers} Tier custom cake with ${flavor} and ${frosting}. Inscription: "${inscription || 'None'}"`,
      price: customCakePrice,
      category: 'Custom Cakes',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800'
    };

    const customization: CakeCustomization = {
      tiers,
      flavor,
      frosting,
      hasGoldLeaf,
      hasFlowers,
      inscription
    };

    onAddToBag(customCakeProduct, 1, customization);
    setDesignerSuccess(true);
    setTimeout(() => setDesignerSuccess(false), 3000);
  };

  // Filter products based on category & search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-amber-50/20 via-white to-amber-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            Our Menu Catalog
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            Browse Our Sweet Creations
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            Every creation is prepared freshly on the morning of delivery with pure organic ingredients and pristine structural artistry.
          </p>
        </div>

        {/* 🎨 Interactive Cake Designer Banner */}
        <div className="mb-20 bg-gradient-to-tr from-amber-900 to-amber-950 rounded-[2.5rem] p-8 md:p-12 shadow-xl text-white relative overflow-hidden border border-amber-800/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,63,94,0.15)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Preview Side */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-inner relative min-h-[380px]">
              
              {/* Dynamic Mockup Cake Display */}
              <div className="flex flex-col-reverse items-center justify-center gap-1 w-full relative pt-12 pb-6">
                
                {/* Stand */}
                <div className="w-40 h-3 bg-amber-200/90 rounded-full shadow-md z-10" />
                <div className="w-12 h-6 bg-amber-100/80 rounded-t-lg shadow-sm" />

                {/* Tier 1 (Base) */}
                <motion.div
                  layout
                  className={`relative rounded-t-xl transition-colors duration-500 shadow-md ${
                    frosting.includes('Chocolate') ? 'bg-amber-800' :
                    frosting.includes('Caramel') ? 'bg-amber-600' :
                    frosting.includes('Rosewater') ? 'bg-rose-200' : 'bg-amber-100'
                  }`}
                  style={{
                    width: '160px',
                    height: '65px',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="absolute inset-x-0 bottom-2 border-b-2 border-dashed border-white/30" />
                  {/* Decorative frosting trim */}
                  <div className="absolute inset-x-0 bottom-0 h-2 bg-white/20 rounded-b-sm" />
                </motion.div>

                {/* Tier 2 */}
                {tiers >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout
                    className={`relative rounded-t-xl transition-colors duration-500 shadow-md z-10 ${
                      frosting.includes('Chocolate') ? 'bg-amber-800' :
                      frosting.includes('Caramel') ? 'bg-amber-600' :
                      frosting.includes('Rosewater') ? 'bg-rose-200' : 'bg-amber-100'
                    }`}
                    style={{
                      width: '120px',
                      height: '55px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <div className="absolute inset-x-0 bottom-2 border-b-2 border-dashed border-white/30" />
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-white/20 rounded-b-sm" />
                  </motion.div>
                )}

                {/* Tier 3 */}
                {tiers >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout
                    className={`relative rounded-t-xl transition-colors duration-500 shadow-md z-20 ${
                      frosting.includes('Chocolate') ? 'bg-amber-800' :
                      frosting.includes('Caramel') ? 'bg-amber-600' :
                      frosting.includes('Rosewater') ? 'bg-rose-200' : 'bg-amber-100'
                    }`}
                    style={{
                      width: '80px',
                      height: '45px',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <div className="absolute inset-x-0 bottom-2 border-b-2 border-dashed border-white/30" />
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-white/20 rounded-b-sm" />
                  </motion.div>
                )}

                {/* 24k Gold Leaf decoration overlay */}
                {hasGoldLeaf && (
                  <div className="absolute inset-0 pointer-events-none z-30">
                    <Sparkles className="absolute top-1/3 left-1/4 h-5 w-5 text-yellow-400 animate-pulse" />
                    <Sparkles className="absolute top-1/2 right-1/3 h-4 w-4 text-yellow-300 animate-bounce" />
                    <Sparkles className="absolute top-2/3 right-1/4 h-5 w-5 text-yellow-400 animate-pulse" />
                  </div>
                )}

                {/* Fresh Flowers overlay */}
                {hasFlowers && (
                  <div className="absolute inset-y-0 inset-x-12 pointer-events-none z-30 flex flex-col justify-around items-center">
                    <span className="text-xl self-start ml-2 filter drop-shadow">🌸</span>
                    {tiers >= 2 && <span className="text-lg self-end mr-4 filter drop-shadow">🌸</span>}
                    {tiers >= 3 && <span className="text-base self-center filter drop-shadow">🌸</span>}
                  </div>
                )}
              </div>

              {/* Dynamic Cost Label */}
              <div className="mt-4 text-center z-20">
                <div className="text-xs uppercase font-mono tracking-widest text-amber-200">Estimated Cost</div>
                <div className="text-3xl font-bold text-white mt-0.5">${customCakePrice}.00</div>
                <div className="text-[10px] text-white/50 font-mono mt-1">Includes artisan box packaging</div>
              </div>
            </div>

            {/* Config Control Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold font-mono tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> Live Interactive Workshop
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                  Design Your Dream Cake
                </h3>
                <p className="text-sm text-amber-100/70">
                  Select your custom parameters. Our designers will bake your dreams to perfection.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Tiers Option */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 font-mono">Tiers</label>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTiers(t)}
                        className={`flex-1 py-2 px-3 rounded-xl text-sm font-bold transition-all border ${
                          tiers === t
                            ? 'bg-rose-500 border-rose-400 text-white shadow-md'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-amber-100'
                        }`}
                      >
                        {t} {t === 1 ? 'Tier' : 'Tiers'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Base Flavor */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 font-mono">Base Sponge Flavor</label>
                  <select
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-400"
                  >
                    <option className="text-amber-950" value="Vanilla Bean Sponge">Vanilla Bean Sponge</option>
                    <option className="text-amber-950" value="Belgian Chocolate Fudge">Belgian Chocolate Fudge</option>
                    <option className="text-amber-950" value="Velvet Red Raspberry">Velvet Red Raspberry</option>
                    <option className="text-amber-950" value="Lemon Elderflower">Lemon Elderflower</option>
                  </select>
                </div>

                {/* Frosting Flavor */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 font-mono">Frosting / Drizzle</label>
                  <select
                    value={frosting}
                    onChange={(e) => setFrosting(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-400"
                  >
                    <option className="text-amber-950" value="Creamy Vanilla Buttercream">Creamy Vanilla Buttercream</option>
                    <option className="text-amber-950" value="Dark Chocolate Ganache">Dark Chocolate Ganache</option>
                    <option className="text-amber-950" value="Salted Caramel Drizzle">Salted Caramel Drizzle</option>
                    <option className="text-amber-950" value="Rosewater Whipped Cream">Rosewater Whipped Cream</option>
                  </select>
                </div>

                {/* Inscription Text */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-200 font-mono">Custom Inscription</label>
                  <input
                    type="text"
                    maxLength={35}
                    value={inscription}
                    onChange={(e) => setInscription(e.target.value)}
                    placeholder="e.g. Happy Birthday!"
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-3 py-2 text-sm text-white placeholder-amber-200/40 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  />
                </div>
              </div>

              {/* Extra Checkboxes */}
              <div className="flex gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={hasGoldLeaf}
                    onChange={(e) => setHasGoldLeaf(e.target.checked)}
                    className="rounded text-rose-500 bg-white/5 border-white/20 focus:ring-0 focus:ring-offset-0 h-4 w-4"
                  />
                  <span className="text-xs text-amber-100 group-hover:text-white transition-colors font-mono uppercase">
                    ✨ Edible 24k Gold Leaf (+$25)
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={hasFlowers}
                    onChange={(e) => setHasFlowers(e.target.checked)}
                    className="rounded text-rose-500 bg-white/5 border-white/20 focus:ring-0 focus:ring-offset-0 h-4 w-4"
                  />
                  <span className="text-xs text-amber-100 group-hover:text-white transition-colors font-mono uppercase">
                    🌸 Organic Flowers (+$15)
                  </span>
                </label>
              </div>

              {/* Add Custom Cake Button */}
              <button
                onClick={handleAddCustomCake}
                className="w-full mt-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 font-bold text-white shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                Add Custom Cake to Bag
              </button>

              <AnimatePresence>
                {designerSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono justify-center"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Added successfully! Review in your checkout bag.
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>
        </div>

        {/* Catalog Control Area (Search & Categories) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Categories Pill Container */}
          <div className="flex-1 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-amber-950 text-white shadow-md'
                    : 'bg-amber-50 text-amber-900/80 hover:bg-rose-50 border border-amber-100'
                }`}
              >
                All Products
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-950 text-white shadow-md'
                      : 'bg-amber-50 text-amber-900/80 hover:bg-rose-50 border border-amber-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <input
              type="text"
              placeholder="Search bakery items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-amber-50 border border-amber-100 hover:border-amber-200 focus:border-rose-300 rounded-full py-2.5 pl-10 pr-4 text-sm text-amber-950 placeholder-amber-900/40 focus:outline-none focus:ring-1 focus:ring-rose-300"
            />
            <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-amber-900/40" />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden border border-amber-100/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Header */}
                <div className="relative aspect-square overflow-hidden bg-amber-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-amber-50 text-[10px] uppercase font-mono font-bold text-amber-950">
                    {product.category}
                  </div>

                  {/* Hot / Popular Label */}
                  {product.isPopular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-500 text-white shadow-sm text-[10px] uppercase font-mono font-bold flex items-center gap-1">
                      <Sparkles className="h-3 w-3 animate-pulse" /> Popular
                    </div>
                  )}
                </div>

                {/* Product Body details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Tags */}
                    {product.tags && (
                      <div className="flex flex-wrap gap-1">
                        {product.tags.map((tag) => (
                          <span key={tag} className="text-[10px] text-rose-500 font-mono bg-rose-50 px-2 py-0.5 rounded-md font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h4 className="text-lg font-bold text-amber-950 leading-tight font-sans group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h4>

                    <p className="text-sm text-amber-900/70 leading-relaxed font-sans line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-50">
                    <span className="text-xl font-bold text-amber-950">
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      id={`add-to-bag-${product.id}`}
                      onClick={() => onAddToBag(product, 1)}
                      className="px-4 py-2 rounded-full text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white shadow-inner active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center text-amber-900/40 space-y-3">
              <div className="text-4xl">🧁</div>
              <h4 className="text-lg font-bold font-sans">No bakery items found</h4>
              <p className="text-sm">Try broadening your search or choosing another category.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
