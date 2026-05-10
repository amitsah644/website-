import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { REGISTRATION_FEES } from '../constants';

export default function Registration() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  if (formState === 'success') {
    return (
      <section id="register" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-10 max-w-xl text-center">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 text-white p-12 rounded-2xl shadow-xl"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Success.</h3>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              We've sent a confirmation email with all the details for SSDGT 2026.
            </p>
            <button 
              onClick={() => setFormState('idle')}
              className="text-blue-500 font-bold text-xs uppercase tracking-widest hover:text-blue-400 transition-colors"
            >
              Confirm Another Registration
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-white border-t border-slate-100 scroll-mt-16">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Registration
              </h3>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-6">Join the <br/>Symposium.</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Secure your place today. Professional passes include full access to tracks, workshops, and networking events.
              </p>
            </div>
            
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Registration Fees</h4>
              <div className="space-y-6">
                {REGISTRATION_FEES.map((item, index) => (
                  <div key={index} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.type}</span>
                      <span className="text-sm font-bold text-blue-500 whitespace-nowrap">{item.fee.split(' / ')[0]}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Important Dates</h4>
              <ul className="space-y-3 font-bold text-xs">
                <li className="flex justify-between items-center text-slate-500 uppercase tracking-wider">
                  <span>Paper Submission</span>
                  <span className="text-slate-900">JAN 15</span>
                </li>
                <li className="flex justify-between items-center text-slate-500 uppercase tracking-wider">
                  <span>Acceptance Notice</span>
                  <span className="text-slate-900">FEB 20</span>
                </li>
                <li className="flex justify-between items-center text-slate-500 uppercase tracking-wider">
                  <span>Camera Ready</span>
                  <span className="text-slate-900">MAR 10</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-10 lg:p-12">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Registration Details</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all font-medium" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Institutional Email</label>
                <input required type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Affiliation / organization</label>
                <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Additional Information</label>
                <textarea rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-all font-medium" />
              </div>
              
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10 disabled:bg-slate-400"
              >
                {formState === 'submitting' ? 'Processing...' : 'Complete Registration'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
