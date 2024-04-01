import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Logo from '../image/Self Learning (HD).png';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="bg-white w-full border-b border-black ">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <img src={Logo} width={60} height={50} alt="Float UI logo" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className={`bg-white absolute z-20 w-full  top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? "" : "hidden"}`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              <li className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                <Link to="/customer" className="block p-2 border hover:text-blue-600 hover:border-b-black">Customers</Link>
                <Link to="/career" className="block p-2 m-2 border hover:text-blue-600 hover:border-b-black ">Careers</Link>
                <Link to="/about" className="block p-2 m-2 border hover:text-blue-600 hover:border-b-black">About</Link>
                <Link to="/partner" className="block p-2 m-2 border hover:text-blue-600 hover:border-b-black">Partners</Link>
              </li>
              <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                  <Link to="/login" className="block text-gray-700 hover:text-gray-900">
                      Log in
                  </Link>
                  <Link to="/signin" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                      Sign in
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                  </Link>
              </div>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6"> 
            <button className="outline-none text-gray-400 block lg:hidden" onClick={() => setMenuState(!menuState)}>
              {menuState ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
