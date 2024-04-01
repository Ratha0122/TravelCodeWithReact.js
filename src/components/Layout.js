import React, { useState } from "react";

const PricingSection = () => {
    const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to indicate no active feature

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index); // Toggle active index
    };
    

    const plans = [
        {
            name: "Enterprise",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 32,
            isMostPop: true,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Startup",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 12,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Basic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 8,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section className='relative py-14 bg-gray-900'>
            {/* Pricing information */}
            <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
                <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h3 className="text-cyan-400 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-white text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                {/* Pricing plans */}
                <div className="flex justify-center items-center">
                    <div className='mt-16 grid items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-md:grid-cols-1'>
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative animate-slide-in-left_1s_ease-in-out flex-1 flex items-stretch flex-col mt-6 border-2 rounded-xl ${activeIndex === index ? "bg-gray-900 border-cyan-400 border-x-2" : "border-transparent"} cursor-pointer`} onClick={() => handleClick(index)}>

                                {/* Plan details */}
                                <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                                    <span className='text-gray-200 font-medium'>
                                        {plan.name}
                                    </span>
                                    <div className='text-cyan-400 text-3xl font-semibold'>
                                        ${plan.price} <span className="text-xl font-normal">/mo</span>
                                    </div>
                                    <p className="text-gray-400">
                                        {plan.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700'>
                                        Get Started
                                    </button>
                                </div>
                                {/* Plan features */}
                                <ul className='p-4 py-8 space-y-3 md:p-8'>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={`flex items-center gap-5 cursor-pointer `}>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className={`h-5 w-5`}
                                                viewBox='0 0 20 20'
                                                fill='currentColor'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
