import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Instagram, MessageCircle, Music } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function HomePage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const services = [
    {
      title: 'Greeting Cards',
      description: 'Personalized greeting cards for every occasion',
      image: 'https://images.unsplash.com/photo-1744898130445-e6ccb0df1ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVldGluZyUyMGNhcmQlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjgyNTY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--bright-pink)',
    },
    {
      title: 'Advent Calendars',
      description: 'Festive countdown calendars for the holiday season',
      image: 'https://images.unsplash.com/photo-1606767978899-a4946a8e514d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnQlMjBjYWxlbmRhciUyMGZlc3RpdmV8ZW58MXx8fHwxNzY4MjU2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--deep-purple)',
    },
    {
      title: 'Card Games',
      description: 'Custom card games designed for fun and learning',
      image: 'https://images.unsplash.com/photo-1687040129053-aabdc09146d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkJTIwZ2FtZSUyMHBsYXlpbmclMjBjYXJkc3xlbnwxfHx8fDE3NjgyNTY0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--burnt-orange)',
    },
    {
      title: 'Gifts',
      description: 'Unique personalized gifts for your loved ones',
      image: 'https://images.unsplash.com/photo-1640253621150-d75179c58838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4MTk2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--yellow-orange)',
    },
    {
      title: 'Custom Story Books',
      description: 'Personalized storybooks featuring your child as the hero',
      image: 'https://images.unsplash.com/photo-1631508766808-3f4c79fd5ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzdG9yeWJvb2slMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjgyNTY0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'var(--teal)',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1744898130445-e6ccb0df1ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVldGluZyUyMGNhcmQlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjgyNTY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1750535135593-3a8e5def331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGF2YXRhciUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjgyNTY0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1606767978899-a4946a8e514d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnQlMjBjYWxlbmRhciUyMGZlc3RpdmV8ZW58MXx8fHwxNzY4MjU2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1631508766808-3f4c79fd5ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzdG9yeWJvb2slMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjgyNTY0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1640253621150-d75179c58838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4MTk2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1687040129053-aabdc09146d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkJTIwZ2FtZSUyMHBsYXlpbmclMjBjYXJkc3xlbnwxfHx8fDE3NjgyNTY0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1744898130445-e6ccb0df1ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVldGluZyUyMGNhcmQlMjBkZXNpZ24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjgyNTY0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Personalized Greeting Cards',
      description: 'Create heartfelt messages with beautiful designs',
    },
    {
      image: 'https://images.unsplash.com/photo-1750535135593-3a8e5def331d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGF2YXRhciUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjgyNTY0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: '3D Avatar Story Books',
      description: 'Your child becomes the hero of their own adventure',
    },
    {
      image: 'https://images.unsplash.com/photo-1631508766808-3f4c79fd5ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzdG9yeWJvb2slMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjgyNTY0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Custom Story Books',
      description: 'Bring your imagination to life with personalized stories',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <section id="home" className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Slider {...carouselSettings} className="overflow-hidden rounded-2xl">
              {carouselItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="relative h-[500px] md:h-[600px]">
                    <ImageWithFallback 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                      <div className="p-8 md:p-12 text-white max-w-3xl">
                        <h2 className="text-3xl md:text-5xl mb-4">{item.title}</h2>
                        <p className="text-lg md:text-xl opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl mb-6">Create Memories That Last Forever</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transform your stories into beautiful, personalized books featuring custom 3D avatars. 
              Our story builder makes it easy to create unique gifts that celebrate the special moments in life.
            </p>
            <Link 
              to="/story-submission"
              className="inline-block bg-black text-white px-12 py-4 rounded-full hover:bg-[var(--deep-purple)] transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">
                Our <span style={{ color: 'var(--deep-purple)' }}>Story</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                InsideOut Brand.ng was born from a simple belief: every person has a unique story worth celebrating. 
                We combine cutting-edge 3D avatar technology with heartfelt storytelling to create personalized 
                experiences that bring joy to families around the world.
              </p>
              <p className="text-lg text-gray-700">
                Whether it's a birthday, graduation, or just because, our custom creations help you express 
                what matters most in a way that's as unique as the people you love.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--bright-pink)' }}>1000+</div>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--teal)' }}>500+</div>
                <p className="text-gray-600">Stories Created</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--yellow-orange)' }}>50+</div>
                <p className="text-gray-600">Unique Designs</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-black/5 text-center">
                <div className="text-4xl mb-2" style={{ color: 'var(--deep-purple)' }}>24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Our <span style={{ color: 'var(--deep-purple)' }}>Services</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of personalized products designed to bring joy and create lasting memories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div 
                    className="absolute top-4 right-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Our <span style={{ color: 'var(--deep-purple)' }}>Gallery</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of beautiful creations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">Get In <span style={{ color: 'var(--deep-purple)' }}>Touch</span></h2>
            <p className="text-lg text-gray-600">
              Have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--deep-purple)] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full hover:bg-[var(--deep-purple)] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 hover:bg-[var(--bright-pink)] hover:text-white hover:border-transparent transition-all"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 hover:bg-[var(--light-green)] hover:text-white hover:border-transparent transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 hover:bg-black hover:text-white hover:border-transparent transition-all"
            >
              <Music className="w-5 h-5" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 InsideOut Brand.ng. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
