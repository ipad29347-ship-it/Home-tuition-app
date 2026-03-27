import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Classes from '@/components/Classes';
import TimingsLocation from '@/components/TimingsLocation';
import Offerings from '@/components/Offerings';
import RegistrationForm from '@/components/RegistrationForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import PWARegister from '@/components/PWARegister';

export default function Home() {
  return (
    <main className="flex-grow">
      <PWARegister />
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Offerings />
      <TimingsLocation />
      <RegistrationForm />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
