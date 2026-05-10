import { motion } from 'motion/react';
import { SPEAKERS } from '../constants';

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="mb-12 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Experts & Pioneers
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Keynote Speakers</h2>
          </motion.div>
          <div className="hidden md:block w-32 h-1 bg-blue-600 mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                
                <div className="p-8">
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-2">{speaker.organization}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{speaker.name}</h4>
                  <p className="text-sm font-medium text-slate-500 mb-6">{speaker.role}</p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-medium">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
