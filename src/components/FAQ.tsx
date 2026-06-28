import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            Common Inquiries
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            Got questions? We have compiled responses to help you understand our design consultations, lead times, and online checkout bag.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-amber-200 bg-amber-50/50 shadow-sm'
                    : 'border-amber-100 hover:border-amber-200 bg-white'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-0"
                >
                  <div className="flex gap-3 items-start">
                    <HelpCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isOpen ? 'text-rose-500' : 'text-amber-900/30'}`} />
                    <span className="text-base sm:text-lg font-bold text-amber-950 font-sans leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full border border-amber-200/50 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-rose-500 text-white border-transparent' : 'bg-amber-50 text-amber-900/60'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated content drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-amber-900/80 leading-relaxed font-sans border-t border-amber-100/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Prompt to reach out directly */}
        <div className="mt-12 p-6 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-amber-950 font-sans">Still have unanswered questions?</h4>
            <p className="text-sm text-amber-900/75">Our consultants are available 9:00 AM – 7:00 PM daily to assist with custom orders.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 font-bold text-white text-sm tracking-wide transition-colors flex items-center gap-1.5 shadow-sm"
          >
            Chat with Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
