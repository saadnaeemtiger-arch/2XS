import { Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <Award className="h-5 w-5 text-amber-700" />,
      title: 'Artisan Craftsmanship',
      desc: 'Each dessert is hand-sculpted by master bakers who treat confectionery as an art form.',
    },
    {
      icon: <Heart className="h-5 w-5 text-rose-600" />,
      title: 'Made with Passion',
      desc: 'We pour heart and soul into every measurement, whisk, fold, and decorative brush stroke.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: 'Premium Ingredients',
      desc: 'Organic local flour, Normandy butter, Belgian chocolates, and fresh seasonal hand-picked berries.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-amber-50/50 to-amber-50/20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-rose-100/30 blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-amber-100/30 blur-3xl -ml-30 -mb-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side (Mosaic/Layout) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
            {/* Main large image */}
            <div className="col-span-8 overflow-hidden rounded-2xl shadow-xl border-4 border-white aspect-[3/4] relative group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600"
                alt="Baker whisking batter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Smaller secondary image stacked */}
            <div className="col-span-4 flex flex-col gap-4 justify-end">
              <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-square relative group">
                <img
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=400"
                  alt="Delicious croissants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg border-4 border-white aspect-[3/4] relative group">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
                  alt="Artisanal sourdough bread"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* floating experience badge */}
            <div className="absolute -bottom-4 left-6 bg-gradient-to-tr from-rose-500 to-amber-500 text-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-rose-400/20">
              <span className="font-serif text-3xl font-bold">10+</span>
              <div className="leading-tight text-xs font-semibold uppercase tracking-wider font-mono">
                Years of
                <span className="block text-amber-200">Sweetness</span>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
                Our Story
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight leading-tight">
                Welcome to CakieBakie
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-amber-900/80 leading-relaxed font-sans">
              At CakieBakie, we believe every bite should bring happiness. From custom celebration cakes to freshly baked pastries and desserts, we combine quality ingredients with creative craftsmanship to make every occasion special.
            </p>

            <p className="text-sm sm:text-base text-amber-900/70 leading-relaxed font-sans">
              Founded in 2016 in the heart of the city, we started as a small kitchen passionate about standard brioche doughs and intricate hand-piping buttercream designs. Today, we are proud to serve premium bespoke culinary creations while preserving our cozy family-bakery soul.
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-4 pt-2">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 items-start p-3 rounded-xl hover:bg-amber-100/30 transition-colors">
                  <div className="p-2.5 rounded-lg bg-amber-100/70 border border-amber-200/50 flex-shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-950 font-sans">{val.title}</h4>
                    <p className="text-sm text-amber-900/70 mt-0.5">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
