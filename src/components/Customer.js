import React from 'react';
import Footer from './Footer';

const Customer = () => {
    // Sample customer data
    const customers = [
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Alex Shatov',
            email: 'alexshatov@gmail.com',
            spent: '$2,890.66',
            country: '🇺🇸',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
        },
        {
            name: 'Philip Harbach',
            email: 'philip.h@gmail.com',
            spent: '$2,767.04',
            country: '🇩🇪',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg'
        },
        {
            name: 'Philip Harbach',
            email: 'philip.h@gmail.com',
            spent: '$2,767.04',
            country: '🇩🇪',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg'
        },
        {
            name: 'Philip Harbach',
            email: 'philip.h@gmail.com',
            spent: '$2,767.04',
            country: '🇩🇪',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg'
        },
        {
            name: 'Philip Harbach',
            email: 'philip.h@gmail.com',
            spent: '$2,767.04',
            country: '🇩🇪',
            image: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg'
        },
        // Add more customer data as needed
    ];

    return (
        <section className="antialiased bg-gray-100 text-gray-600 h-screen">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100 animate-slide-in-left_1s_ease-in-out">
                        <h2 className="font-semibold text-gray-800">Customers</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 animate-fade-in-down_1s_ease-in-out">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Spent</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Country</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100 animate-slide-in-right_1s_ease-in-out ">
                                    {customers.map((customer, index) => (
                                        <tr key={index}>
                                            <td className="p-2 whitespace-nowrap ">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                                                    </div>
                                                    <div className="font-medium text-gray-800">{customer.name}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.email}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">{customer.spent}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{customer.country}</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Customer;
