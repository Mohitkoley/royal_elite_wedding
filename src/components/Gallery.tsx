import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3',
    title: 'Traditional Wedding'
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3',
    title: 'Wedding Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    title: 'Wedding Decoration'
  },
  {
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3',
    title: 'Wedding Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3',
    title: 'Wedding Reception'
  },
  {
    url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3',
    title: 'Wedding Details'
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    title: 'Wedding Moments'
  },
  {
    url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3',
    title: 'Wedding Planning'
  }
];

function Gallery() {
  return (
    <section className="bg-white/90 py-16 md:py-24 relative">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />

      <div className="container mx-auto">
        <h2 className="section-title">Image Gallery</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="section-subtitle">
          Take a look at our previous work in the photographs below! We are your creative wedding planner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative h-[300px] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline">
            See More
          </button>
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180" />
    </section>
  );
}

export default Gallery;