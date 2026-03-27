'use client';

import { motion } from 'motion/react';
import { BookOpen, PenTool, Brain, Users } from 'lucide-react';

const offerings = [
  {
    title: 'Strong Basics',
    description: 'Focusing on foundational literacy and numeracy skills.',
    icon: BookOpen,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    title: 'Homework Help',
    description: 'Guided assistance to complete daily school assignments.',
    icon: PenTool,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    title: 'Practice & Revision',
    description: 'Regular worksheets and playful quizzes to reinforce learning.',
    icon: Brain,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    title: 'Engaging Environment',
    description: 'A fun, interactive space where kids love to learn.',
    icon: Users,
    color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive approach to after-school learning that balances academics with engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex gap-6 p-6 rounded-3xl bg-white cartoony-card`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                <item.icon size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-poppins text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
