import { motion } from 'motion/react';
import { FileText, ExternalLink, Mail } from 'lucide-react';
import { IMPORTANT_DATES, PROCEEDINGS_INFO } from '../constants';

export default function Submission() {
  return (
    <section id="submission" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-16">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Call for Papers
            </h3>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-8">
              Submit Your <br/>Research.
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                We invite researchers to submit original papers and abstracts related to Sustainable Development and Green Technology. All submissions undergo a rigorous peer-review process.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
                <h4 className="text-slate-900 font-bold mb-3">Conference Proceedings</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">
                  {PROCEEDINGS_INFO}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:ssdgt2026@nfu.edu.tw" 
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Submission
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Submission Guidelines
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-slate-900 p-8 text-white">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Important Deadlines</h4>
                <p className="text-sm text-slate-400">Strict adherence to these dates is required for inclusion in proceedings.</p>
              </div>
              <div className="p-0">
                {IMPORTANT_DATES.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center px-8 py-6 ${index !== IMPORTANT_DATES.length - 1 ? 'border-bottom border-slate-50 border-b' : ''}`}
                  >
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{item.event}</span>
                    <span className="font-mono text-sm font-bold text-blue-600">{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-6 flex items-center justify-between">
                <p className="text-[10px] font-bold text-blue-900 uppercase tracking-widest flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Submission System: EasyChair
                </p>
                <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline">
                  Go to System
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
