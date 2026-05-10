import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { VENUE_INFO } from '../constants';

export default function Venue() {
  return (
    <section id="venue" className="py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <iframe 
                src={VENUE_INFO.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Location
              </h3>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6">
                Meet in <br/>Yunlin.
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                SSDGT 2026 will be hosted at National Formosa University's Main Campus. Yunlin is the agricultural heart of Taiwan, now transforming into a green technology hub.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Symposium Venue</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {VENUE_INFO.name}<br/>
                    {VENUE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                   <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Official Inquiry</h4>
                  <p className="text-sm text-slate-500 font-medium">ssdgt2026@nfu.edu.tw</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                   <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Tel / Fax</h4>
                  <p className="text-sm text-slate-500 font-medium">+886-5-631-5000</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group">
              <Navigation className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Get Directions via Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
