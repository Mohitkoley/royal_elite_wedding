import React from 'react';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', active: true },
  { label: 'About Us' },
  { label: 'Services', hasDropdown: true },
  { label: 'Testimonials' },
  { label: 'Gallery' },
  { label: 'Blog' },
  { label: 'Contact Us' }
];

function Navbar() {
  return (
    <nav className="bg-[#151515] text-white">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-8 py-4">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a 
                href="#" 
                className={`flex items-center gap-1 font-playfair tracking-[3px] text-sm uppercase py-2
                  ${item.active ? 'text-[#ee959e]' : 'text-white/90 hover:text-[#ee959e] transition-colors'}
                `}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;