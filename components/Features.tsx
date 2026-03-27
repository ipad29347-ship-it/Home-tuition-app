'use client';

import { motion } from 'motion/react';
import { Heart, Smile, Lightbulb, Backpack } from 'lucide-react';

const features = [
  {
    title: 'Personalized Attention',
    description: 'Every child learns differently. We adapt to their unique pace and style.',
    icon: Heart,
    color: 'bg-red-100 text-red-500',
  },
  {
    title: 'Friendly Teaching',
    description: 'A warm, encouraging environment where asking questions is celebrated.',
    icon: Smile,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Concept Clarity',
    description: 'Focus on understanding the "why" and "how", not just memorizing.',
    icon: Lightbulb,
    color: 'bg-blue-100 text-blue-500',
  },
  {
    title: 'School Preparation',
    description: 'Aligning with school curriculum to ensure confidence in class.',
    icon: Backpack,
    color: 'bg-green-100 text-green-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Happy Minds?
          </h2>
          <p className="text-lg text-slate-600">
            We believe learning should be a joyful experience. Our approach is designed to build confidence alongside competence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 cartoony-card group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-poppins text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
