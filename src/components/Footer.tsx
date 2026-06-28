import { Sparkles, Instagram, Facebook, MessageCircle, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const categories = [
    'Custom Celebration Cakes',
    'Tiered Wedding Cakes',
    'Gourmet Cupcakes',
    'Parisian Macarons',
    'Burnt Basque Cheesecakes',
    'French Butter Croissants'
  ];

  const quickLinks = [
    { name: 'Home Landing', href: '#home' },
    { name: 'Our Kitchen Story', href: '#about' },
    { name: 'Artisan Menu', href: '#menu' },
    { name: 'Visual Showcase', href: '#gallery' },
    { name: 'Common Inquiries', href: '#faq' },
    { name: 'Visit Storefront', href: '#contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-amber-950 text-white pt-20 pb-8 relative overflow-hidden border-t border-amber-900">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => scrollToSection('#home')}>
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-xl font-bold shadow-sm">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight font-bold text-white leading-none">
                  CakieBakie
                </span>
                <span className="block text-[9px] tracking-widest uppercase font-mono text-[#D4AF37] font-bold mt-1 leading-none">
                  Artisan Bakery
                </span>
              </div>
            </div>

            <p className="text-sm text-amber-100/60 leading-relaxed font-sans">
              Hand-sculpting freshly baked happiness and sweet memories every day. We combine pure organic ingredients with creative design to make every occasion special.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-rose-500 hover:text-white border border-white/10 transition-all text-amber-200"
                aria-label="Instagram Page"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-rose-500 hover:text-white border border-white/10 transition-all text-amber-200"
                aria-label="Facebook Page"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/15550199"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 transition-all text-amber-200"
                aria-label="WhatsApp Hotline"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-300 font-mono">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-amber-100/60 hover:text-rose-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-300 font-mono">Product Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollToSection('#menu')}
                    className="text-sm text-amber-100/60 hover:text-rose-400 transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-300 font-mono">Store Info</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin className="h-4.5 w-4.5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-amber-100/60 leading-relaxed font-sans">
                  482 Artisan Boulevard,<br />Confectionery District
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4.5 w-4.5 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-amber-100/60 font-sans">
                  (555) 0199
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4.5 w-4.5 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-amber-100/60 font-sans">
                  hello@cakiebakie.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer: Legal copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-amber-100/40 font-mono">
            Copyright &copy; 2026 CakieBakie. All rights reserved.
          </p>
          <p className="text-xs text-amber-100/40 flex items-center gap-1 font-sans">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> for sweet celebrations.
          </p>
        </div>

      </div>
    </footer>
  );
}
