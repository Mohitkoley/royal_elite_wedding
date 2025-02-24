import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', scrollTo: 'hero', path: '/' },
  { label: 'About Us', scrollTo: 'about', path: '/' },
  { 
    label: 'Services', 
    scrollTo: '', 
    path: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Wedding Planning', path: '/services/wedding-planning' },
      { label: 'Corporate Events', path: '/services/corporate-events' },
      { label: 'Social Celebrations', path: '/services/social-celebrations' },
      { label: 'Decor & Design', path: '/services/decor-design' }
    ]
  },
  { label: 'Blog', scrollTo: '', path: '/blog' },
  { label: 'Testimonials', scrollTo: '', path: '/testimonials' },
  { label: 'Gallery', scrollTo: '', path: '/gallery' },
  { label: 'Contact Us', scrollTo: '', path: '/contact' }
];

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (scrollTo?: string, path?: string) => {
    if (path === '/contact') {
      setIsMobileMenuOpen(false);
      return; // Let the Link component handle the navigation
    }

    if (path === '/' && location.pathname !== '/') {
      // If we're not on the home page, don't try to scroll
      return;
    }

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar?.offsetHeight || 0;
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const totalOffset = navbarHeight + headerHeight;
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="bg-[#151515] text-white sticky top-0 z-50">
      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden absolute left-4 top-4 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="container mx-auto px-4">
        <ul className={`
          flex flex-col md:flex-row justify-center md:justify-center gap-4 md:gap-8 py-4
          ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex
        `}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                onClick={() => handleNavClick(item.scrollTo, item.path)}
                className={`
                  flex items-center gap-1 font-playfair tracking-[3px] text-sm uppercase py-2
                  transition-colors duration-300
                  ${activeSection === item.scrollTo ? 'text-[#ee959e] active-nav-link' : 'text-white/90 hover:text-[#ee959e]'}
                `}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md overflow-hidden py-2 z-50">
                  {item.dropdownItems?.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary-dark transition-colors duration-200"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
