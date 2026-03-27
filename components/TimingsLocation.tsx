'use client';

import { motion } from 'motion/react';
import { Clock, MapPin, ShieldCheck } from 'lucide-react';

export default function TimingsLocation() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Timings Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-300 rounded-3xl p-10 relative overflow-hidden cartoony-card"
          >
            <Clock className="absolute -right-10 -bottom-10 w-64 h-64 text-yellow-500 opacity-5" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock size={28} />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-4">Flexible Timings</h3>
              <p className="text-slate-600 mb-6 text-lg">
                We understand busy schedules. Choose a time slot that works best for your child after school.
              </p>
              <div className="bg-white rounded-2xl p-6 cartoony-card inline-block">
                <div className="text-3xl font-black text-yellow-500 font-poppins">
                  4:00 PM <span className="text-slate-300 mx-2">-</span> 7:00 PM
                </div>
                <div className="text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">Monday to Friday</div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-red-300 rounded-3xl p-10 relative overflow-hidden cartoony-card"
          >
            <MapPin className="absolute -right-10 -bottom-10 w-64 h-64 text-red-500 opacity-5" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-slate-900 mb-4">Convenient Location</h3>
              <p className="text-slate-600 mb-6 text-lg">
                Located right within the society premises, ensuring zero commute time and maximum safety for your child.
              </p>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 cartoony-card">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Safe & Secure</div>
                  <div className="text-sm text-slate-500">Within Society Premises</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
