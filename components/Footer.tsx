import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center md:items-start">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image src="/icons/logo.png" alt="Happy Minds Logo" width={32} height={32} className="rounded-lg" />
              <span className="font-poppins font-bold text-xl text-white tracking-tight">
                Happy Minds
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs">
              Building strong foundations for bright futures. Specialized tuition for Grades 1 to 5.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#classes" className="hover:text-red-400 transition-colors">Classes</a></li>
              <li><a href="#location" className="hover:text-red-400 transition-colors">Location & Timings</a></li>
              <li><a href="#enroll" className="hover:text-red-400 transition-colors">Enroll Now</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Within Society Premises</li>
              <li>Mon - Fri, 4:00 PM - 7:00 PM</li>
              <li><a href="tel:+919120519990" className="hover:text-red-400 transition-colors">+91 91 20 5199 90</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Happy Minds Tuition. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for kids.</p>
        </div>
      </div>
    </footer>
  );
}
