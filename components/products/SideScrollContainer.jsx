import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SideScrollContainer = ({ children, scrollAmount = 0.8, ...props }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollDistance = container.clientWidth * scrollAmount; // Scroll a customizable percentage of the container width
      container.scrollBy({
        left: direction === "left" ? -scrollDistance : scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative w-full' {...props}>
      <button
        onClick={() => scroll("left")}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10'
        aria-label='Scroll left'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>

      <div
        ref={scrollContainerRef}
        className='overflow-x-auto whitespace-nowrap py-4 px-8 max-w-full'
      >
        <div className='inline-flex space-x-4'>{children}</div>
      </div>

      <button
        onClick={() => scroll("right")}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10'
        aria-label='Scroll right'
      >
        <ChevronRight className='w-6 h-6' />
      </button>
    </div>
  );
};

export default SideScrollContainer;
