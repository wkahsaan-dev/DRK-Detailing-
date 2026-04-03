import { motion } from "motion/react";
import { Car, Phone, Mail, MapPin, CheckCircle2, Star, Shield, Clock, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const SERVICES = [
  {
    title: "Exterior Detailing",
    description: "Premium hand wash, wax, and paint protection to make your car shine like new.",
    prices: [
      { type: "Coupe", price: "$50" },
      { type: "Normal Size", price: "$60" },
      { type: "SUV / Sedan", price: "$70" },
    ],
    icon: <Car className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning, vacuuming, and conditioning for a fresh and hygienic cabin.",
    prices: [
      { type: "Coupe", price: "$70" },
      { type: "Normal Size", price: "$80" },
      { type: "SUV / Sedan", price: "$90" },
    ],
    icon: <Shield className="w-6 h-6 text-orange-500" />,
  },
];

const FEATURES = [
  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Professional Grade Products" },
  { icon: <Clock className="w-5 h-5" />, text: "Efficient & Timely Service" },
  { icon: <MapPin className="w-5 h-5" />, text: "Serving the DMV Area" },
  { icon: <Star className="w-5 h-5" />, text: "Attention to Detail" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic">DRK</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter italic">DETAILING</span>
                <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em]">DMV AREA</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">Services</a>
              <a href="#pricing" className="text-sm font-medium hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden p-2 relative z-50 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            y: isMenuOpen ? 0 : "-100%",
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`md:hidden fixed inset-0 bg-brand-dark z-40 pt-20 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <div className="px-6 py-12 flex flex-col items-center justify-center space-y-8 text-center h-full overflow-y-auto">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic hover:text-orange-500 transition-colors">SERVICES</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic hover:text-orange-500 transition-colors">PRICING</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic hover:text-orange-500 transition-colors">CONTACT</a>
            
            <div className="pt-8 w-full">
              <a 
                href="tel:+12402240862" 
                className="w-full py-5 bg-orange-500 text-white font-black italic text-xl rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
              >
                <Phone className="w-6 h-6" />
                CALL NOW
              </a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/30 rounded-full blur-[80px] sm:blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-orange-600/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
                Premium Car Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] mb-6">
                SHOWROOM <span className="text-orange-500">SHINE</span><br />
                EVERY TIME.
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Professional mobile detailing serving the DMV area. 
                We bring the shine to your doorstep with expert care and precision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="#services" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition-all text-center">
                  View Services
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="text-orange-500">{feature.icon}</div>
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Car Detailing" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-left-6 z-20 glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 animate-bounce-slow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold">5.0 Rating</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Trusted by DMV Residents</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" className="py-16 lg:py-24 bg-brand-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-black italic tracking-tight mb-4">OUR SERVICES</h2>
            <div className="h-1.5 w-20 sm:w-24 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-6 sm:p-8 lg:p-12 flex flex-col h-full"
              >
                <div className="mb-6 p-3 bg-orange-500/10 rounded-xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-8">{service.description}</p>
                
                <div className="mt-auto space-y-4">
                  <div className="text-xs font-bold text-orange-500 tracking-widest uppercase">Pricing</div>
                  {service.prices.map((p, j) => (
                    <div key={j} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                      <span className="text-gray-300 text-sm sm:text-base">{p.type}</span>
                      <span className="text-lg sm:text-xl font-black italic">{p.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 sm:p-8 lg:p-16 relative z-10">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black italic mb-6 leading-tight">READY TO GET<br /><span className="text-orange-500">STARTED?</span></h2>
              <p className="text-gray-400 text-sm sm:text-base mb-10">
                Contact us today for a quote or to schedule your next detailing session. 
                We serve the entire DMV area.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                <a href="tel:+12402240862" className="flex flex-col items-center gap-4 group glass-card p-6 hover:border-orange-500/50 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Call or Text</div>
                    <div className="text-lg sm:text-xl font-bold truncate">+1 (240) 224-0862</div>
                  </div>
                </a>
                
                <a href="mailto:drk4cleaning@gmail.com" className="flex flex-col items-center gap-4 group glass-card p-6 hover:border-orange-500/50 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</div>
                    <div className="text-base sm:text-xl font-bold break-words">drk4cleaning@gmail.com</div>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4 glass-card p-6 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Service Area</div>
                    <div className="text-lg sm:text-xl font-bold">DMV Area</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-black text-sm italic">DRK</span>
              </div>
              <span className="font-black italic tracking-tighter">DETAILING</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DRK Detailing. All rights reserved.
            </div>

            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
