import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../image/Self Learning (HD).png';
import Footer from './Footer';

const Example = () => {
  const handleSignin = ()=>{
    try{
      console.log("success");
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-20 w-auto animate-slide-in-left_1s_ease-in-out"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 animate-slide-in-right_1s_ease-in-out">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6 " action="#" method="POST" onClick={handleSignin}>
            <div className="animate-fade-in-down_1s_ease-in-out">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="animate-fade-in_1s_ease-in-out">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-sm animate-slide-in-left_1s_ease-in-out">
                <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
                </Link>
            </div>
            <div>
              <button
                type="submit"
                className="animate-slide-in-right_1s_ease-in-out flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignin}
             >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 animate-fade-in-down_1s_ease-in-out">
            Not a member?{' '}
            <Link to="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Example;
