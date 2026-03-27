'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function RegistrationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // INSTRUCTIONS: Replace this URL with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdplvap';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Oops! There was a problem submitting your form');
        }
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Oops! There was a problem submitting your form');
      setStatus('error');
    }
  };

  return (
    <section id="enroll" className="py-20 bg-white relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-red-50 transform -skew-y-3 origin-top-left" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] cartoony-card p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Register Your Interest
            </h2>
            <p className="text-slate-600">
              Fill out the form below and we&apos;ll get back to you to discuss your child&apos;s needs.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your registration has been received. We will contact you shortly.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-green-600 font-semibold hover:text-green-800 underline"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold text-slate-700 mb-2">Parent&apos;s Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="w-full px-4 py-3 rounded-xl cartoony-input bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="childName" className="block text-sm font-semibold text-slate-700 mb-2">Child&apos;s Name *</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    required
                    className="w-full px-4 py-3 rounded-xl cartoony-input bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="grade" className="block text-sm font-semibold text-slate-700 mb-2">Grade *</label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    className="w-full px-4 py-3 rounded-xl cartoony-input bg-white appearance-none"
                  >
                    <option value="">Select Grade</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl cartoony-input bg-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timeSlot" className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time Slot</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  className="w-full px-4 py-3 rounded-xl cartoony-input bg-white appearance-none"
                >
                  <option value="Anytime (4 PM - 7 PM)">Anytime (4 PM - 7 PM)</option>
                  <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                  <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                  <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl cartoony-input bg-white resize-none"
                  placeholder="Any specific areas your child needs help with?"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-red-500 disabled:bg-red-400 text-white font-bold py-4 rounded-xl cartoony-btn flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    Submit Registration <Send size={20} />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
