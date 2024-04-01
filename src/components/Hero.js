import React from "react";
import LayoutGrids from "./Layout";


const HeroSection = () => {

  return (
    <section>
      <div className="w-full h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img src="https://picsum.photos/seed/picsum/1900/850" className="absolute animate-slide-in-right_1s_ease-in-out top-0 left-0 min-h-full ob" alt=""/>
        <div className="relative z-20 max-w-screen-lg mx-auto animate-slide-in-left_1s_ease-in-out grid lg:grid-cols-12 h-full items-center ">
          <div className="col-span-6 m-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block ">WE ARE EXPERTS</span>
            <h1 className=" font-extrabold text-5xl mb-8 animate-text bg-gradient-to-r from-teal-300 via-purple-700 to-orange-800 bg-clip-text text-transparent " >Finpoint provides Financial Consulting in different ways</h1>
            <p className="text-stone-100 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
          </div>
        </div>
      </div>

      <LayoutGrids />
      
      <div className="py-4 relative overflow-hidden ">
        <div className="grid grid-cols-2 md:grid-cols-2 max-md:grid-cols-1">
          <div className="h-full grid p-4 animate-slide-in-left_1s_ease-in-out">
            <h2 className="text-[rgb(57,50,112)] text-left max-w-xs font-bold text-2xl m-10">Whether you need Assistance</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://i.pinimg.com/474x/a8/03/b3/a803b34c1aa5f44f2e963f177e29e516.jpg" className="h-[350px] w-full object-fill" alt=""/>
            </div>
          </div>

          <div className="py-20 mt-5 bg-slate-900 relative animate-slide-in-right_1s_ease-in-out before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
            <div className="relative z-20 pl-12 ">
              <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Finpoint is here <br/>to help you</h2>
              <p className="text-white text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
              </p>
              <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 md:grid-cols-2 max-md:grid-cols-1 ">
          <div className="py-20 mt-5 bg-slate-100 relative animate-slide-in-left_1s_ease-in-out before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
            <div className="relative z-20 pl-12 ">
              <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ">Finpoint is here <br/>to help you</h2>
              <p className="text-sky-950 text-sm">
                Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
              </p>
              <button className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
            </div>
          </div>
          <div className="h-full bg-[#e7ddd6] grid p-4 animate-slide-in-right_1s_ease-in-out">
            <h2 className="text-[rgb(57,50,112)] text-left max-w-xs font-bold text-2xl m-10">Whether you need Assistance</h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img src="https://i.pinimg.com/474x/31/4f/5e/314f5e499b916140b642c49f12e4163d.jpg" className="h-[350px] w-full object-fill" alt=""/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
