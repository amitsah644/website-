import { motion } from 'motion/react';
import { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import { SCHEDULE, SPEAKERS, CONFERENCE_DATES } from '../constants';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 bg-slate-50">
      <div className="container mx-auto px-10 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> At a Glance
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Symposium Schedule</h2>
          </div>
          
          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-slate-200">
            {CONFERENCE_DATES.map((date, index) => (
              <button
                key={date.label}
                onClick={() => setActiveDay(index)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                  activeDay === index 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {SCHEDULE.map((item, index) => {
            const speaker = SPEAKERS.find(s => s.id === item.speakerId);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 p-8 ${
                  index !== SCHEDULE.length - 1 ? 'border-b border-slate-100' : ''
                } hover:bg-slate-50/50 transition-colors group`}
              >
                <div className="md:w-32 shrink-0">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${item.type === 'keynote' ? 'text-blue-600' : 'text-slate-400'}`}>
                    Day 0{activeDay + 1}
                  </p>
                  <p className="text-sm font-bold text-slate-900 font-mono tracking-tight">{item.time}</p>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.type}</p>
                    <h4 className="text-xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-300" />
                      {item.location}
                    </div>
                    {speaker && (
                      <div className="flex items-center gap-2 text-slate-700">
                        <User className="w-3.5 h-3.5 text-blue-500" />
                        {speaker.name}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
