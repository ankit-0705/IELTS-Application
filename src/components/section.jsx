import band_score from '../assets/band-score.png';
import mock_test from '../assets/Mock-Test.webp';

const features = [
  {
    id: "speaking-practice",
    title: "Speaking Practice",
    description:
      "Unlock fluency and confidence through live speaking sessions, simulated interview tasks, instant AI evaluations, and peer feedback. Practice common topics, tricky idioms, and exam strategies to maximize your band score in real IELTS scenarios. Receive instant corrections and targeted advice, helping you overcome hesitation and speak with clarity in all language functions.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description:
      "Test your readiness with comprehensive, timed mock exams mirroring the exact IELTS structure. Analyze your performance with section-wise breakdowns, pinpointing strengths and areas for improvement. Get real-time analytics and compare your scores with previous attempts, building the stamina and confidence needed for actual test day.",
    image:mock_test,
  },
  {
    id: "ai-band-score",
    title: "AI Band Score",
    description:
      "Receive detailed, AI-driven band score predictions based on your answers, writing samples, and speaking sessions. Benefit from personalized study recommendations, error analysis, and improvement tips that adapt to your individual performance. The smart engine tracks progress across listening, reading, writing, and speaking, helping you target your next score level.",
    image:band_score,
  },
  {
    id: "expert-tutors",
    title: "Expert Tutors",
    description:
      "Learn from certified IELTS tutors with years of proven results and global teaching experience. Enjoy tailored lesson plans, one-on-one feedback, and tips for IELTS success drawn from hundreds of real candidates. Tutors help you master exam strategies, complex language skills, and time management, ensuring top scores in every band.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=60",
  },
];

const Sections = () => (
  <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-14 sm:space-y-20 px-3 sm:px-6" id='features'>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black">Features</h2>
        <span className="block w-10 h-1 mx-auto bg-gray-300 rounded"></span>
      </div>
    {features.map((feature, index) => {
      const isEven = index % 2 === 0;
      return (
        <div
          key={index}
          id={feature.id}
          className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-10 scroll-mt-24`}
        >
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left px-2 sm:px-4">
            <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4 text-black">{feature.title}</h3>
            <p className="text-gray-700 text-base sm:text-lg">{feature.description}</p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-lg shadow-lg object-cover max-h-52 sm:max-h-80 mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default Sections;
