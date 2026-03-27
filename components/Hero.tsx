'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-red-50/50 to-white">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-red-100 text-red-600 font-semibold rounded-full text-sm tracking-wide uppercase">
              Grades 1 to 5
            </div>
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Building Strong <span className="text-red-500 relative">
                Foundations
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span> <br className="hidden sm:block" />
              for Bright Futures
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Friendly, personalized tuition that helps your child grasp concepts clearly, complete homework with confidence, and prepare for school success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#enroll"
                className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg cartoony-btn text-center"
              >
                Enroll Now
              </a>
              <a
                href="#features"
                className="bg-white text-slate-800 px-8 py-4 rounded-full font-bold text-lg cartoony-btn text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full"
          >
            <div className="relative aspect-square w-full">
              {/* Using a placeholder image that looks like a cartoon/illustration */}
              <Image
                src="/icons/logo.png"
                alt="Happy children learning"
                fill
                className="object-contain rounded-[3rem] cartoony-card rotate-3 hover:rotate-0 transition-transform duration-500 bg-white"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Decorative floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl cartoony-card flex items-center gap-3"
              >
                <div className="bg-yellow-100 text-yellow-600 p-2 rounded-full">⭐</div>
                <div className="font-bold text-slate-800">Top Rated</div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl cartoony-card flex items-center gap-3"
              >
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full">📚</div>
                <div className="font-bold text-slate-800">Small Batches</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
