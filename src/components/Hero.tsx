import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { GENERATED_IMAGES } from '../data';

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
}

export default function Hero({ onOrderNowClick, onViewMenuClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-amber-950"
    >
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={GENERATED_IMAGES.hero}
          alt="Premium freshly baked cakes and pastries at CakieBakie"
          className="w-full h-full object-cover scale-105 filter brightness-50 contrast-105 transition-all duration-1000 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays to ensure text contrast and warm branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-transparent to-amber-950/70" />
        
        {/* Animated sparkling dust effects representing flour or magic sprinkles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1)_0%,transparent_50%)] opacity-70 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.08)_0%,transparent_40%)] opacity-70 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16">
        {/* Small subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
          Artisan Dessert Boutique
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md"
        >
          Freshly Baked
          <span className="block mt-1 bg-gradient-to-r from-amber-200 via-rose-300 to-amber-100 bg-clip-text text-transparent font-serif italic font-normal px-2">
            Happiness Every Day
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-amber-100/90 leading-relaxed mb-10 font-sans drop-shadow-sm"
        >
          Delicious cakes, pastries, cupcakes, cookies, and handcrafted desserts made with premium ingredients for every celebration.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            id="hero-order-now"
            onClick={onOrderNowClick}
            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold tracking-wide text-base shadow-lg hover:shadow-xl hover:shadow-rose-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 border border-rose-400/20"
          >
            Order Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            id="hero-view-menu"
            onClick={onViewMenuClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-bold tracking-wide text-base border border-white/20 hover:border-white/40 active:scale-95 transition-all flex items-center justify-center"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Floating Animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-[10px] uppercase font-mono tracking-widest text-amber-200/50 mb-2">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10"
          onClick={onViewMenuClick}
        >
          <ChevronDown className="h-4 w-4 text-amber-200/80" />
        </motion.div>
      </div>
    </section>
  );
}
