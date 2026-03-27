'use client';

import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-red-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-poppins text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Limited Seats Available <br />
          <span className="text-yellow-300">Enroll Now!</span>
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Give your child the advantage of strong basics and personalized attention. Join the Happy Minds family today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#enroll"
            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg cartoony-btn w-full sm:w-auto"
          >
            Register Online
          </a>
          <a
            href="tel:+919120519990"
            className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg cartoony-btn flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <PhoneCall size={20} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
