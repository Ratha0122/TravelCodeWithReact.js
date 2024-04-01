import React from 'react';
import Footer from './Footer';

function PartnershipsSection() {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 animate-fade-in-down_1s_ease-in-out">
          <h1 tabIndex="0" className="focus:outline-none xl:text-5xl md:text-3xl text-xl dark:text-black text-center text-gray-800 font-extrabold mb-5 pt-4">Partnerships with Coveted Brands</h1>
          <p tabIndex="0" className="focus:outline-none text-base md:text-lg lg:text-xl dark:text-gray-600 text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Our success has come from being committed to the property and investing in the development of the product to maximize sales. At the same time and maintaining the integrity.</p>
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap animate-fade-in_1s_ease-in-out">
          <BrandImage src="https://cdn.tuk.dev/assets/adidas-dark.png" alt="Adidas" />
          <BrandImage src="https://cdn.tuk.dev/assets/channel-dark.png" alt="Chanel" />
          <BrandImage src="https://cdn.tuk.dev/assets/nike-dark.png" alt="Nike" />
          <BrandImage src="https://cdn.tuk.dev/assets/toyota-dark.png" alt="Toyota" />
          <BrandImage src="https://cdn.tuk.dev/assets/gs1-dark.png" alt="GS1" />
          <BrandImage src="https://cdn.tuk.dev/assets/berry-dark.png" alt="BlackBerry" />
          <BrandImage src="https://cdn.tuk.dev/assets/min-dark.png" alt="Mini" />
          <BrandImage src="https://cdn.tuk.dev/assets/honda-dark.png" alt="Honda" />
        </div>
      </div>
      <Footer />
    </>
  );
}

function BrandImage({ src, alt }) {
  return (
    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
      <img tabIndex="0" className="focus:outline-none" src={src} alt="" role="img" />
    </div>
  );
}

export default PartnershipsSection;
