const Hero = () => {
  return (
    <div className="relative h-[733px] overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-[url('/src/images/Hero.png')]">
      <div className="absolute inset-0 bg-black/65" />
    </div>

    {/* Content */}
    <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
      <span className="font-playfair text-lg md:text-2xl tracking-[5px] uppercase mb-4">
        Our Wedding Designer
      </span>

      <h1 className="font-playfair text-4xl md:text-7xl lg:text-[90px] leading-tight mb-6">
        ROYAL ELITE WEDDING
      </h1>

      <p className="font-playfair text-lg md:text-2xl max-w-4xl mx-auto">
        At Royal Elite Wedding, we specialize in creating unforgettable celebrations, 
        turning your dreams into reality.
      </p>

      {/* Decorative Elements */}
      <div className="mt-8 w-[403px] max-w-full h-px bg-white/20" />
      {/* <div className="mt-8">
        <img src="/decorative-element.png" alt="" className="w-32 h-32" />
      </div> */}
    </div>
  </div>
  )
}

export default Hero
