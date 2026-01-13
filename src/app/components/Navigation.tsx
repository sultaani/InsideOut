import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black/5 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--deep-purple)]">InsideOut Brand.ng</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/#home" 
              className={`transition-colors ${isActive('/') ? 'text-[var(--deep-purple)]' : 'text-black hover:text-[var(--deep-purple)]'}`}
            >
              Home
            </Link>
            <a 
              href="/#gallery" 
              className="text-black hover:text-[var(--deep-purple)] transition-colors"
            >
              Gallery
            </a>
            <a 
              href="/#services" 
              className="text-black hover:text-[var(--deep-purple)] transition-colors"
            >
              Services
            </a>
            <Link 
              to="/story-submission" 
              className={`transition-colors ${location.pathname.includes('story') || location.pathname.includes('avatar') || location.pathname.includes('confirmation') ? 'text-[var(--deep-purple)]' : 'text-black hover:text-[var(--deep-purple)]'}`}
            >
              Story Builder
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
