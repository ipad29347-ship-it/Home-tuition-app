'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Classes() {
  const highlights = [
    'Strong basics foundation',
    'Small batches for focus',
    'Individual attention',
    'Regular progress updates',
  ];

  return (
    <section id="classes" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden cartoony-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm tracking-wide uppercase self-start">
                Our Focus
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Specialized for <br />
                <span className="text-blue-500">Grades 1 to 5</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                The early years of education are crucial. We focus exclusively on primary grades to ensure your child develops a love for learning that lasts a lifetime.
              </p>
              
              <ul className="space-y-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 text-center">
                <div className="text-8xl font-black text-blue-500 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                  1-5
                </div>
                <div className="relative bg-white p-8 rounded-3xl cartoony-card max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <h3 className="font-poppins text-2xl font-bold text-slate-800 mb-2">Primary Education</h3>
                  <p className="text-slate-600">Building the stepping stones for future academic excellence in a stress-free environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
