import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='relative md:mx-16 black mt-2  h-64 bg-gray-200  '>
      <div className='overflow-hidden rounded-lg shadow-lg h-full'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`/${image}`}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
              onError={(e) => {
                console.error(`Error loading image: ${image}`);
                e.target.src = "/placeholder.jpg"; // Fallback image
              }}
            />
            {/* Debugging: Display image path */}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute top-1/2 transform -translate-y-1/2 bg-white  text-grey p-2 rounded-l-none rounded '
      >
        <ChevronLeft size={24} height={72} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white  text-grey p-2 rounded-r-none rounded '
      >
        <ChevronRight size={24} height={72} />
      </button>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
