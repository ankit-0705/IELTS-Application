import React from 'react';
import { FaComments, FaClipboardList, FaRobot, FaUserGraduate } from 'react-icons/fa';

const features = [
  {
    icon: <FaComments className="text-2xl sm:text-3xl text-indigo-900" />,
    title: "Speaking Practice",
    id: "speaking-practice",
    shortDesc: "Interactive sessions & instant feedback"
  },
  {
    icon: <FaClipboardList className="text-2xl sm:text-3xl text-indigo-900" />,
    title: "Mock Tests",
    id: "mock-tests",
    shortDesc: "Simulate real IELTS, track progress"
  },
  {
    icon: <FaRobot className="text-2xl sm:text-3xl text-indigo-900" />,
    title: "AI Band Score",
    id: "ai-band-score",
    shortDesc: "Automated scoring, targeted advice"
  },
  {
    icon: <FaUserGraduate className="text-2xl sm:text-3xl text-indigo-900" />,
    title: "Expert Tutors",
    id: "expert-tutors",
    shortDesc: "Learn from IELTS certified experts"
  },
];

const Features = () => {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center gap-5 sm:gap-8 p-4 sm:p-6 lg:p-8  rounded-2xl  w-full max-w-[90vw] sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      {features.map((feature, idx) => (
        <div
          key={idx}
          onClick={() => handleScrollToSection(feature.id)}
          className="flex flex-col items-center p-3 sm:p-5 rounded-xl shadow-md bg-gray-50 w-full sm:w-56 min-w-[140px] cursor-pointer
                      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-3 sm:mb-0"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleScrollToSection(feature.id);
            }
          }}
        >
          {feature.icon}
          <span className="mt-3 text-base sm:text-lg font-medium text-black text-center">{feature.title}</span>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">{feature.shortDesc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
