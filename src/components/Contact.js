import React from 'react';
import Footer from './Footer';

const ContactSection = () => {
    return (
        <>
            <div className="container my-12 mx-auto px-2 md:px-4">
                <section className="mb-32">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold animate-slide-in-right_1s_ease-in-out">Contact us</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap m-0 py-10">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

const ContactForm = () => {
    return (
        <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6 animate-fade-in_1s_ease-in-out">
            <div className="mb-3 w-full">
                <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">Name</label>
                <input type="text" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
            </div>
            <div className="mb-3 w-full">
                <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">Email</label>
                <input type="text" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Enter your Email address" />
            </div>
            <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Message
                    </label>
                    <textarea class="px-2 py-2 border dark:border-gray-500 rounded-[5px] w-full outline-none" name="" id=""></textarea>
                </div>
            <button type="button" className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">Send</button>
        </form>
    );
};

const ContactInfo = () => {
    const contacts = [
        { type: "Technical support", email: "support@example.com", phone: "+1 234-567-89" },
        { type: "Sales questions", email: "sales@example.com", phone: "+1 234-567-89" },
        { type: "Press", email: "press@example.com", phone: "+1 234-567-89" },
        { type: "Bug report", email: "bugs@example.com", phone: "+1 234-567-89" }
    ];

    return (
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap animate-slide-in-left_1s_ease-in-out">
                {contacts.map((contact, index) => (
                    <ContactCard key={index} {...contact} />
                ))}
            </div>
        </div>
    );
};

const ContactCard = ({ type, email, phone }) => {
    return (
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
                {/* Add markup for contact card */}
                <div className="shrink-0">
                    {/* Add SVG icon */}
                </div>
                <div className="ml-6 grow">
                    <p className="mb-2 font-bold">{type}</p>
                    <p className="text-neutral-500">{email}</p>
                    <p className="text-neutral-500">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
