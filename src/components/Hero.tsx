import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { CONFERENCE_NAME, CONFERENCE_DATES } from '../constants';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-16 px-6 lg:px-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              International Conference 2026
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] text-slate-900 mb-8 tracking-tight">
              Pioneering <span className="text-blue-600">Sustainable</span> Futures & Green Solutions.
            </h1>
            
            <div className="flex flex-wrap gap-8 items-center text-slate-500 font-medium">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{CONFERENCE_DATES[0].date} — {CONFERENCE_DATES[2].date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-sm">National Formosa University, Taiwan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto"
          >
            <div className="flex gap-12 text-slate-900">
              <div className="text-left lg:text-right">
                <span className="block text-4xl lg:text-5xl font-bold leading-none mb-1">500+</span>
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest block whitespace-nowrap">Expected Attendees</span>
              </div>
              <div className="text-left lg:text-right">
                <span className="block text-4xl lg:text-5xl font-bold leading-none mb-1">24+</span>
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest block whitespace-nowrap">Global Keynotes</span>
              </div>
            </div>
            <div className="w-full lg:w-48 h-1.5 bg-blue-600 rounded-full"></div>
            
            <div className="flex gap-4 mt-2">
              <a 
                href="#register"
                className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10"
              >
                Register Now
              </a>
              <a 
                href="#schedule"
                className="px-8 py-3.5 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
              >
                View Program
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// Helper icons just for this file as I can't import all at once easily without check
import { Users } from 'lucide-react';
import { Leaf } from 'lucide-react';
