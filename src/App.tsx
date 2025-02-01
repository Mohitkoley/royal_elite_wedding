import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Logo from "./images/logo.png";
import NewsletterSubscribe from './components/NewsletterSubscribe';

function App() {
  return (
    <div className="min-h-screen bg-[#f7e7ce]">
      {/* Header */}
      <header className="bg-[#a48244] text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="w-[180px] md:w-[224px]">
            <img src={Logo} alt="Royal Elite Events" className="w-30 h-auto" />
          </div>
          
          <div className="flex flex-col justify-between md:flex-row gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              {/* <Phone className="w-5 h-5" /> */}
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase">Call Us</span>
                <span className="text-base">+16465262336 - +15166054010</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* <Mail className="w-5 h-5" /> */}
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase">Mail Us</span>
                <span className="text-base">info@royaleliteevents.com</span>
              </div>
            </div>

            <button className="border-2 border-white px-8 py-3 hover:bg-white hover:text-[#a48244] transition-colors">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </header> 
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <FAQ />
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
}

export default App;
