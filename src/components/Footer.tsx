import { Leaf, Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { CONFERENCE_SHORT_NAME, CONFERENCE_NAME } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xs">S</div>
            <span className="font-bold tracking-tight text-lg text-slate-900">
              SSDGT <span className="text-blue-600">2026</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
            <a href="#about" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#schedule" className="hover:text-blue-600 transition-colors">Schedule</a>
            <a href="#submission" className="hover:text-blue-600 transition-colors">Submission</a>
            <a href="#register" className="hover:text-blue-600 transition-colors">Register</a>
            <a href="#venue" className="hover:text-blue-600 transition-colors">Venue</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest font-medium border-t border-slate-50 pt-8">
          <p>© {currentYear} SSDGT Organizing Committee · English Version</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="https://sites.google.com/view/2026ssdgt/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Chinese Version</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
