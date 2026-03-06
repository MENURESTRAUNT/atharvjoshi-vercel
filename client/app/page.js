import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import AboutPreview from '@/components/AboutPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <Highlights />
      <AboutPreview />

      {/* Location Section Embed */}
      <section className="h-96 w-full filter grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          title="Gaylords Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.123456789!2d78.0435!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3OMKwMDInMzYuNiJF!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </section>

      <Footer />
    </main>
  );
}
