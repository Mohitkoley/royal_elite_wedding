import { Phone, Mail, MapPin } from 'lucide-react';
import FooterLogo from "../images/footer-logo.png";
function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10" />
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <img src={FooterLogo} alt="Royal Elite Events" className="w-36 mb-6" />
            <p className="text-white/80 mb-6">
              At Royal Elite Events, we specialize in creating unforgettable celebrations, 
              turning your dreams into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-ovo text-lg uppercase text-primary-light mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Weddings', 'Featured Events', 'Testimonials', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-ovo text-lg uppercase text-primary-light mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {['Help Support', 'Blogs', 'Careers', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-light transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-ovo text-lg uppercase text-primary-light mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+16465262336 - +15166054010</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@royaleliteevents.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  New Jersey, Connecticut,
                  <br />
                  Pennsylvania, New York.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary py-4 text-center">
        <p className="text-white">
          Copyright © {new Date().getFullYear()} Royal Elite Events. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
