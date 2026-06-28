import { Clock, Gem, Palette, PartyPopper, Gift, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-amber-700" />,
      title: 'Freshly Baked Every Day',
      desc: 'Our bakers rise before the sun to ensure our ovens are hot and every croissant, muffin, and loaf is perfectly golden and warm for your mornings.',
      color: 'from-amber-100/50 to-amber-200/20'
    },
    {
      icon: <Gem className="h-6 w-6 text-rose-600" />,
      title: 'Premium Quality Ingredients',
      desc: 'We never compromise on quality. We import organic vanilla pods, premium Belgian chocolate blocks, and farm-fresh butter, resulting in unmatched depth of flavor.',
      color: 'from-rose-50 to-rose-100/30'
    },
    {
      icon: <Palette className="h-6 w-6 text-indigo-600" />,
      title: 'Custom Cake Designs',
      desc: 'Your imagination is our canvas. We craft bespoke custom cake tiers from intricate hand-painted palettes to stunning edible floral arrangements.',
      color: 'from-indigo-50 to-indigo-100/30'
    },
    {
      icon: <PartyPopper className="h-6 w-6 text-pink-600" />,
      title: 'Perfect for Birthdays & Weddings',
      desc: 'No milestone is too small. We design custom dessert bars, tiered spectaculars, and party boxes that form the sweet beating heart of your celebrations.',
      color: 'from-pink-50 to-pink-100/30'
    },
    {
      icon: <Gift className="h-6 w-6 text-emerald-600" />,
      title: 'Beautiful Gift Packaging',
      desc: 'Our gorgeous signature boxes come with gold-embossed details, linen ribbons, and custom cards, turning delicious treats into luxurious ready-to-give gifts.',
      color: 'from-emerald-50 to-emerald-100/30'
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: 'Fast Ordering Process',
      desc: 'Browse our visual catalog, select custom finishes with our estimator, and send your curated order inquiry straight to our WhatsApp line in seconds.',
      color: 'from-yellow-50 to-yellow-100/30'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-teal-600" />,
      title: 'Friendly Customer Service',
      desc: 'From custom design consulting to final order pickups, we support you with genuine warmth, careful attention, and sweet, responsive communication.',
      color: 'from-teal-50 to-teal-100/30'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-white to-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            The CakieBakie Standard
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            We hold ourselves to the highest artisanal standards, merging authentic classic baking techniques with modern luxurious presentation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, index) => {
            // Let the custom cake card span 2 cols on wide screens to make a beautiful rhythmic bento design
            const isWideCard = index === 2;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`p-8 rounded-3xl bg-gradient-to-tr ${feat.color} border border-amber-100/50 hover:border-amber-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  isWideCard ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3.5 rounded-2xl bg-white shadow-sm border border-amber-100 flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-950 font-sans">{feat.title}</h3>
                    <p className="text-sm text-amber-900/70 leading-relaxed mt-2 font-sans">{feat.desc}</p>
                  </div>
                </div>
                
                {/* Visual ornament */}
                <div className="mt-6 flex justify-end">
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-900/20">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Brand visual quote */}
        <div className="mt-16 p-8 rounded-3xl bg-amber-950 text-white text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.15)_0%,transparent_70%)]" />
          <p className="relative z-10 font-serif italic text-lg sm:text-xl text-amber-100">
            "Combining pure ingredients with detailed, handcrafted elegance to baked goods that tell a beautiful story."
          </p>
          <span className="relative z-10 block text-xs font-mono uppercase tracking-widest text-rose-400 mt-3 font-semibold">— Chef Baker, CakieBakie</span>
        </div>

      </div>
    </section>
  );
}
