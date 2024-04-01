import React from 'react';
import Footer from './Footer';

const JobCard = () => {
  // Sample job data array
  const jobs = [
    {
      category: 'Engineering',
      title: 'Senior FrontEnd Developer',
      type: 'Full-time',
      location: 'Remote, UK'
    },
    {
        category: 'Engineering',
        title: 'Senior Full Stack Backend Engineer',
        type: 'Full-time',
        location: 'Remote, UK'
      },
      {
        category: 'Engineering',
        title: 'Senior Backend Engineer',
        type: 'Full-time',
        location: 'Remote, UK'
      },
      {
        category: 'Engineering',
        title: 'Senior MERN Stack Backend Engineer',
        type: 'Full-time',
        location: 'Remote, UK'
      },
      {
        category: 'Engineering',
        title: 'Senior Java Engineer',
        type: 'Full-time',
        location: 'Remote, UK'
      },
      {
        category: 'Engineering',
        title: 'Senior Analysis',
        type: 'Full-time',
        location: 'Remote, UK'
      },
    // Add more job data as needed
  ];

  return (
    <>
    <div className="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-gray-50 p-6 sm:py-12">
      {jobs.map((job, index) => (
        <div key={index} className="bg-white shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md ">
          <div className="animate-slide-in-left_1s_ease-in-out">
            <span className="text-purple-800 text-sm">{job.category}</span>
            <h3 className="font-bold mt-px">{job.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">{job.type}</span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> {job.location}
              </span>
            </div>
          </div>
          <div className="animate-slide-in-right_1s_ease-in-out">
            <button className="bg-purple-900 text-white hover:bg-purple-700 font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default JobCard;
