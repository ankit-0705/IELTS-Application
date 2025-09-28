import logo from "../assets/logo.png";

const FooterSection = () => (
  <footer id="footer" className="w-full bg-gray-700 py-8 sm:py-12 px-3 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
        <img src={logo} alt="IELTS Logo" className="mx-auto md:mx-0 w-14 h-14 sm:w-20 sm:h-20 mb-3" />
        <p className="text-white text-lg font-semibold mb-1">IELTS Application</p>
        <span className="text-gray-300 text-base">
          Empowering achievement since 1992
        </span>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto gap-x-10 gap-y-8">
        <div>
          <h6 className="text-white text-md font-bold mb-2 sm:mb-3">Services</h6>
          <ul className="space-y-1 text-gray-300">
            <li>Speaking Practice</li>
            <li>Mock Tests</li>
            <li>AI Band Score</li>
            <li>Expert Tutors</li>
          </ul>
        </div>
        <div>
          <h6 className="text-white text-md font-bold mb-2 sm:mb-3">Company</h6>
          <ul className="space-y-1 text-gray-300">
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div>
          <h6 className="text-white text-md font-bold mb-2 sm:mb-3">Legal</h6>
          <ul className="space-y-1 text-gray-300">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-400 text-xs sm:text-sm">
      © 2025 IELTS Application | All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
