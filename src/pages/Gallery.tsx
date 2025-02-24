import { useState } from 'react';
import Footer from '../components/Footer';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    category: 'Wedding',
    description: 'Elegant Wedding Reception'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
    category: 'Corporate',
    description: 'Annual Business Conference'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44',
    category: 'Social',
    description: 'Birthday Celebration'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330',
    category: 'Decor',
    description: 'Luxury Event Decoration'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    category: 'Wedding',
    description: 'Garden Wedding Setup'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    category: 'Corporate',
    description: 'Product Launch Event'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    category: 'Social',
    description: 'Anniversary Party'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde',
    category: 'Decor',
    description: 'Theme Party Decoration'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    category: 'Wedding',
    description: 'Beach Wedding Setup'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Wedding', 'Corporate', 'Social', 'Decor'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <> <div className="min-h-screen bg-[#f7e7ce] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-8">
          Our Gallery
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                  ? 'bg-[#ee959e] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#ee959e] hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.description}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[#ee959e] text-sm font-medium">
                  {image.category}
                </span>
                <h3 className="text-white text-lg font-playfair">
                  {image.description}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Gallery; 
