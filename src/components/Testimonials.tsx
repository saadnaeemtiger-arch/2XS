import { Star, Quote, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-amber-50/10 to-amber-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            Sweet Words From Clients
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            Read stories of love, celebrations, and delightful sugar moments from our wonderful clients and event planners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-amber-100/50 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Giant quote decorator */}
              <div className="absolute top-6 right-8 text-amber-100 group-hover:text-amber-200/50 transition-colors pointer-events-none">
                <Quote className="h-12 w-12" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* 5 Stars Rating Row */}
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-amber-950 leading-relaxed font-sans italic">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-amber-50">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-rose-100 bg-amber-50">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-amber-950 font-sans leading-none">{test.name}</h4>
                  <span className="text-xs font-semibold text-rose-500 font-mono uppercase mt-1 block">{test.role}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Milestone metrics bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-amber-50 border border-amber-100/50 text-center">
          <div>
            <span className="block text-3xl font-bold text-amber-950">500+</span>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-900/60 font-semibold">Weddings Catered</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-amber-950">4,800+</span>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-900/60 font-semibold">Custom Cakes Made</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-amber-950">99.8%</span>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-900/60 font-semibold">5-Star Reviews</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-amber-950">12k+</span>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-900/60 font-semibold">Happy Cups of Coffee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
