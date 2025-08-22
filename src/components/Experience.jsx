import React from 'react';

const experiences = [
  {
    date: 'June 2024',
    company: 'Zerobug Solutions',
    role: 'Junior App Developer',
    points: [
      'Contributed to the development of secure and user-friendly web and mobile applications by integrating front-end and back-end technologies.',
      'Gained hands-on experience in building dynamic UI components and implementing responsive design using React and basic mobile development principles.',
    ],
  },
  {
    date: 'June 2025',
    company: 'Oasis Infobyte',
    role: 'Web Developer',
    points: [
      'Contributed to the development of responsive and interactive web applications using React.js, gaining hands-on experience in modern front-end development.',
    ],
  },
  {
    date: '2025 (present)',
    company: 'Nexus Club HITS',
    role: 'Full Stack Lead',
    points: [
      'Spearheaded the development of technical projects and platforms for internal and external events, including codeathons, hackathons, and workshops.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="w-full flex justify-center px-5 pb-10">
      <div className="w-full max-w-4xl">
        {/* Gradient Heading */}
        

        {/* Timeline */}
       <div className="relative flex flex-col before:absolute before:top-20 before:bottom-30 before:left-[0.72rem] before:w-1 before:bg-gradient-to-b before:from-pink-500 before:via-purple-500 before:to-indigo-500">

  {/* Timeline entries */}
  {experiences.map((exp, idx) => (
    <div key={idx} className="relative mb-16 flex md:items-center">
      {/* Timeline dot */}
      <div className="absolute left-0 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
        <span className="block w-3.5 h-3.5 bg-gray-900 border-2 border-white rounded-full"></span>
      </div>

      {/* Entry content */}
      <div className="ml-12 flex flex-col md:flex-row md:items-center md:space-x-6 w-full">
        {/* Left: Date & Company */}
        <div className="md:w-1/4 mb-2 md:mb-0">
          <p className="text-md font-medium text-gray-400">{exp.date}</p>
          <p className="text-lg font-semibold text-white">{exp.company}</p>
        </div>
        {/* Right: Role & Description */}
        <div className="md:w-3/4 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-lg shadow-md px-6 py-5">
          <h2 className="text-xl mb-3 font-bold ">{exp.role}</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200">
            {exp.points.map((point, idy) => (
              <li key={idy}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
