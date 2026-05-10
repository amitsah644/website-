import { motion } from 'motion/react';
import { Leaf, Cpu, Globe, Zap } from 'lucide-react';

const subjects = [
  {
    title: 'Carbon Neutrality',
    description: 'Pathways and technologies for achieving net-zero emissions in urban and industrial environments.',
    icon: Leaf,
    color: 'bg-emerald-500'
  },
  {
    title: 'Smart Green Tech',
    description: 'AI and IoT applications for energy efficiency and sustainable resource management.',
    icon: Cpu,
    color: 'bg-blue-500'
  },
  {
    title: 'Circular Economy',
    description: 'Innovative waste management and material recovery systems for a sustainable tomorrow.',
    icon: Globe,
    color: 'bg-indigo-500'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Symposium Overview
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Addressing global challenges with <span className="text-blue-600">innovative</span> solutions.
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                The International Symposium on Sustainable Development and Green Technology brings together researchers, engineers, and environmentists from around the world to present and discuss the latest developments in the field.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Knowledge exchange</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Cross-disciplinary insights from industry leaders and academic pioneers.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Global networking</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Connect with over 500+ professionals committed to sustainable technology.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span> Primary Disciplines
            </h3>
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 transition-colors group shadow-sm"
              >
                <div className={`w-12 h-12 shrink-0 ${subject.color.includes('emerald') ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <subject.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{subject.title}</h4>
                  <p className="text-sm text-slate-500 leading-snug">{subject.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
