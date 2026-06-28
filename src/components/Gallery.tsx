import { useState, MouseEvent } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            Our Visual Canvas
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            The CakieBakie Showcase
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            A visual journey through our kitchen shelves, custom multi-tier wedding orders, and beautifully packaged dessert gift boxes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setActiveIdx(idx)}
              className="group relative rounded-3xl overflow-hidden aspect-square shadow-sm hover:shadow-xl border border-amber-100/30 cursor-pointer bg-white"
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Glassmorphic hover details card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                {/* Upper category chip */}
                <div className="self-end px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] text-white font-mono uppercase tracking-widest font-bold">
                  {item.category}
                </div>

                {/* Lower title and eye icon */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-full bg-rose-500/80 backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                    </div>
                    <span className="text-xs uppercase font-mono tracking-widest text-rose-300 font-semibold">Zoom Image</span>
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight font-sans">
                    {item.title}
                  </h4>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Lightbox Modal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            >
              <div className="relative max-w-5xl w-full flex flex-col items-center">
                
                {/* Header Controls */}
                <div className="absolute -top-12 inset-x-0 flex justify-between items-center text-white px-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-200">
                    <Sparkles className="h-4 w-4 animate-spin text-amber-300" />
                    <span>{activeIdx + 1} / {GALLERY_ITEMS.length}</span>
                  </div>
                  
                  <button
                    onClick={() => setActiveIdx(null)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                    aria-label="Close Lightbox"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Main Image Slider with relative controls */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[75vh] rounded-3xl overflow-hidden bg-black/40 flex items-center justify-center">
                  
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/75 border border-white/10 text-white transition-all active:scale-90"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <motion.img
                    key={activeIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={GALLERY_ITEMS[activeIdx].image}
                    alt={GALLERY_ITEMS[activeIdx].title}
                    className="w-full h-full object-contain pointer-events-none select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/75 border border-white/10 text-white transition-all active:scale-90"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                </div>

                {/* Image Details Caption */}
                <div className="text-center mt-6 space-y-1 text-white px-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold">
                    {GALLERY_ITEMS[activeIdx].category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-sans font-bold">
                    {GALLERY_ITEMS[activeIdx].title}
                  </h3>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
