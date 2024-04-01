import { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { content: 'First slide', imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80' },
    { content: 'Second slide', imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' },
    { content: 'Third slide', imageUrl: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80' }
  ];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000); // Change interval as per your requirement

    return () => clearInterval(intervalId);
  },);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel-container relative overflow-hidden w-full min-h-[450px] bg-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute top-0 left-0 w-full h-full`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              opacity: index === activeIndex ? 1 : 0
            }}
          >
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="flex justify-center items-center object-cover w-full h-full" />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-[36px] h-full text-gray-800 hover:bg-gray-400"
        onClick={handlePrevClick}
      >
        <span class="text-2xl" aria-hidden="true">
            &lt;
        </span>
      </button>

      <button
        type="button"
        className="carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-[36px] h-full text-gray-800 hover:bg-gray-400"
        onClick={handleNextClick}
      >
        <span class="text-2xl" aria-hidden="true">
            &gt;
        </span>
      </button>

      <div className="dot-container flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot size-3 border border-gray-400 rounded-full cursor-pointer ${
              activeIndex === index ? 'bg-blue-800 border-blue-800' : ''
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
