import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, Compass, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const businessHours = [
    { days: 'Monday – Friday', hours: '8:00 AM – 7:30 PM' },
    { days: 'Saturday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '9:00 AM – 5:00 PM' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-amber-50/10 via-white to-amber-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold uppercase tracking-wider font-mono text-rose-500">
            Visit & Connect
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-amber-950 tracking-tight">
            Contact & Business Hours
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-amber-900/60 font-sans pt-2">
            Have a custom cake inquiry or wanting to coordinate a private tasting session? Drop us a line or swing by our storefront.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form and Map Panel */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100/50 shadow-sm">
              <h3 className="text-xl font-bold text-amber-950 font-sans mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-amber-900/60 font-mono">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-amber-50/50 border border-amber-100 focus:border-rose-300 rounded-xl px-4 py-3 text-sm text-amber-950 placeholder-amber-900/30 focus:outline-none focus:ring-1 focus:ring-rose-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-amber-900/60 font-mono">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full bg-amber-50/50 border border-amber-100 focus:border-rose-300 rounded-xl px-4 py-3 text-sm text-amber-950 placeholder-amber-900/30 focus:outline-none focus:ring-1 focus:ring-rose-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-900/60 font-mono">Inquiry Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-amber-50/50 border border-amber-100 focus:border-rose-300 rounded-xl px-4 py-3 text-sm text-amber-950 focus:outline-none focus:ring-1 focus:ring-rose-300"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Wedding Cake Tasting">Wedding Cake Consulting / Tasting</option>
                    <option value="Custom Event Catering">Custom Celebration catering</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-900/60 font-mono">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your celebration, date, and general requirements..."
                    className="w-full bg-amber-50/50 border border-amber-100 focus:border-rose-300 rounded-xl px-4 py-3 text-sm text-amber-950 placeholder-amber-900/30 focus:outline-none focus:ring-1 focus:ring-rose-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 rounded-xl bg-amber-950 text-white font-bold hover:bg-amber-900 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      Send Inquiry Form
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-semibold flex items-center gap-2 justify-center"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      Inquiry delivered! Our event planners will contact you shortly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Premium Custom Map Layout Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-amber-100/50 shadow-sm">
              <div className="p-4 bg-amber-50 border-b border-amber-100/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-950">Store Map Coordinates</span>
                </div>
                <span className="text-[10px] font-mono text-amber-900/50">40.7128° N, 74.0060° W</span>
              </div>
              
              {/* Styled SVG vector map to look clean, modern, minimal and artisan-styled */}
              <div className="relative h-64 sm:h-80 bg-[#f4f1eb] overflow-hidden flex items-center justify-center">
                {/* Simulated Grid Road Map */}
                <div className="absolute inset-0 opacity-40 select-none pointer-events-none">
                  {/* Diagonal and vertical styling grids */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(180,160,130,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(180,160,130,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  {/* Styled major highways */}
                  <div className="absolute w-full h-8 bg-[#eae4d9] top-1/3 transform -rotate-12 border-y border-[#dcd4c5]" />
                  <div className="absolute h-full w-12 bg-[#eae4d9] left-1/4 transform rotate-12 border-x border-[#dcd4c5]" />
                  <div className="absolute h-full w-10 bg-[#eae4d9] right-1/3 transform -rotate-45 border-x border-[#dcd4c5]" />
                  {/* Blue River water body */}
                  <div className="absolute w-1/3 h-full bg-[#e1edf5] -right-24 top-0 border-l border-[#d0e0ed] transform rotate-12 flex items-center justify-center">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#a1c2db] transform rotate-90">East River</span>
                  </div>
                </div>

                {/* Styled park zone */}
                <div className="absolute w-24 h-24 rounded-full bg-[#ebf2ea] border border-[#d8e8d5] left-12 top-8 flex items-center justify-center">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#93b38c]">Madison Park</span>
                </div>

                {/* Central pin marker */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="p-3 bg-rose-500 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  {/* Pin shadow */}
                  <div className="w-6 h-1.5 bg-black/10 rounded-full blur-[2px] mt-1" />
                  
                  {/* Hover tool tip label */}
                  <div className="absolute bottom-16 bg-amber-950 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap border border-white/10 flex items-center gap-1.5">
                    🍰 CakieBakie Store
                  </div>
                </motion.div>

                {/* Floating Map Actions inside */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50 text-amber-950 text-xs font-bold shadow-md border border-amber-100 flex items-center gap-1.5 transition-colors"
                  >
                    <Compass className="h-4 w-4 text-rose-500" />
                    Open in Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Details & Info Panel */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Actions Card */}
            <div className="bg-amber-950 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-lg border border-amber-900">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.15)_0%,transparent_60%)]" />
              
              <div className="space-y-2 relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">Order Hotlines</span>
                <h3 className="text-2xl font-bold font-sans">Contact Information</h3>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col gap-3 relative z-10">
                <a
                  href="tel:+15550199"
                  className="w-full py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="h-4.5 w-4.5 text-rose-400" />
                  Call Now: (555) 0199
                </a>

                <a
                  href="https://wa.me/15550199?text=Hello%20CakieBakie!%20I'd%20like%20to%20inquire%20about%20ordering%20some%20delicious%20desserts!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-white" />
                  Order on WhatsApp
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-rose-500 hover:bg-rose-600 font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Compass className="h-4.5 w-4.5 text-white animate-spin-slow" />
                  Get Directions
                </a>
              </div>

              {/* Contact Specifics */}
              <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
                <div className="flex gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 self-start">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold font-mono tracking-wider uppercase text-amber-200">Bakery Location</h4>
                    <p className="text-sm text-amber-100/80 mt-1 font-sans leading-relaxed">
                      482 Artisan Boulevard, Suite A,<br />Downtown Confectionery District
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 self-start">
                    <Mail className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold font-mono tracking-wider uppercase text-amber-200">Email Address</h4>
                    <p className="text-sm text-amber-100/80 mt-1 font-sans">
                      hello@cakiebakie.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-3xl p-8 border border-amber-100/50 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-100 text-rose-600">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-amber-950 font-sans">Business Hours</h3>
              </div>

              <div className="space-y-3.5">
                {businessHours.map((bh, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-amber-50 last:border-b-0 last:pb-0">
                    <span className="text-sm font-bold text-amber-950 font-sans">{bh.days}</span>
                    <span className="text-sm text-amber-900/70 font-mono font-medium">{bh.hours}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-100/50 rounded-xl text-[11px] text-amber-900/60 font-mono text-center leading-relaxed">
                🚨 NOTE: Special holiday hours and private event bookings are announced via our Instagram.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
