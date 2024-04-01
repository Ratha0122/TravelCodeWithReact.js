import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left animate-fade-in-down_1s_ease-in-out">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block animate-fade-in-down_1s_ease-in-out">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Social network icons container */}
        <div className="flex justify-center">
          {/* Add your social network icons here */}
        </div>
      </div>

      {/* Main container div: holds the entire content of the footer */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* TW Elements section */}
          <div className="animate-fade-in_1s_ease-in-out">
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* Products section */}
          {/* <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">FeedBack</h6>
            <div className="grid grid-cols-1 gap-4">
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Blog</Link>
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Contact</Link>
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Customers</Link>
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Brand</Link>
            </div>
          </div> */}
          {/* Useful links section */}
          <div className="animate-slide-in-left_1s_ease-in-out">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Company</h6>
            <div className="grid grid-cols-1 gap-4">
              <Link to="/about" className="border-b dark:border-neutral-700 hover:border-white">Blog</Link>
              <Link to="/contact" className="border-b dark:border-neutral-700 hover:border-white">Contact</Link>
              <Link to="/customer" className="border-b dark:border-neutral-700 hover:border-white">Customers</Link>
              <Link to="/partner" className="border-b dark:border-neutral-700 hover:border-white">Brand</Link>
            </div>
          </div>
          <div className="animate-slide-in-right_1s_ease-in-out">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Legal</h6>
            <div className="grid grid-cols-1 gap-4">
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Privacy & Policy</Link>
              <Link to="" className="border-b dark:border-neutral-700 hover:border-white">Term Of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-black/5 p-6 text-center animate-fade-in-down_1s_ease-in-out">
        <span>© 2023 Copyright:</span>
        <Link className="font-semibold" to="https://tw-elements.com/">Travel MBS</Link>
      </div>
    </footer>
  );
};

export default Footer;
