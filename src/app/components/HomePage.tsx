import { useState, useRef } from "react";
import Slider from "react-slick";
import { Instagram, MessageCircle, Music } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onGetStarted: () => void;
}

export default function HomePage({ onGetStarted }: HomePageProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const galleryRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const carouselImages = [
    "https://images.unsplash.com/photo-1707035091770-4c548c02e5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "https://images.unsplash.com/photo-1759409972566-1b7cabd45457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1707035091770-4c548c02e5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    "https://images.unsplash.com/photo-1759409972566-1b7cabd45457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
    "https://images.unsplash.com/photo-1761110518837-689557b142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
  ];

  const services = [
    { name: "Greeting Cards", color: "bg-[var(--accent-bright-pink)]" },
    { name: "Advent Calendars", color: "bg-[var(--accent-deep-purple)]" },
    { name: "Card Games", color: "bg-[var(--accent-burnt-orange)]" },
    { name: "Gifts", color: "bg-[var(--accent-light-green)]" },
    { name: "Custom Story Books", color: "bg-[var(--accent-cyan)]" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium tracking-tight">InsideOut Brand.ng</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="hover:opacity-60 transition-opacity">
                Home
              </button>
              <button onClick={() => scrollToSection("gallery")} className="hover:opacity-60 transition-opacity">
                Gallery
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:opacity-60 transition-opacity">
                Services
              </button>
              <button onClick={onGetStarted} className="hover:opacity-60 transition-opacity">
                Story Builder
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4">Bring Your Stories to Life</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create personalized storybooks with custom 3D avatars. Our platform transforms your words into beautifully crafted books that celebrate your unique narrative.
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white hover:bg-black/90 transition-colors"
              style={{ borderRadius: "var(--radius)" }}
            >
              Get Started
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Slider {...carouselSettings}>
              {carouselImages.map((img, idx) => (
                <div key={idx} className="outline-none">
                  <div className="aspect-[16/9] overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
                    <ImageWithFallback
                      src={img}
                      alt={`Carousel ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">About Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                InsideOut Brand.ng is dedicated to celebrating personal narratives through custom storytelling. We believe every story deserves to be told with creativity, emotion, and authenticity.
              </p>
              <p>
                Our platform empowers you to create fully personalized storybooks featuring custom 3D avatars that bring your characters to life. Whether it's a gift, a keepsake, or a creative project, we're here to make your vision a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative p-8 border border-black/10 group hover:border-black/20 transition-all"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-16 ${service.color}`}
                  style={{ borderRadius: "var(--radius-sm)" }}
                />
                <h3 className="font-medium">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-16 sm:py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden border border-black/10 hover:border-black/20 transition-all"
                style={{ borderRadius: "var(--radius)" }}
              >
                <ImageWithFallback
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-12 text-center">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors"
                  style={{ borderRadius: "var(--radius)" }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors"
                  style={{ borderRadius: "var(--radius)" }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-black/10 bg-input-background focus:outline-none focus:border-black/30 transition-colors resize-none"
                  style={{ borderRadius: "var(--radius)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white hover:bg-black/90 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                Send Message
              </button>
            </form>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-black/10 hover:border-[var(--accent-bright-pink)] hover:text-[var(--accent-bright-pink)] transition-all"
                style={{ borderRadius: "var(--radius)" }}
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-black/10 hover:border-[var(--accent-light-green)] hover:text-[var(--accent-light-green)] transition-all"
                style={{ borderRadius: "var(--radius)" }}
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-black/10 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all"
                style={{ borderRadius: "var(--radius)" }}
              >
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center text-muted-foreground">
          <p>© 2026 InsideOut Brand.ng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
