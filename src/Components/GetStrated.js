import { useState } from "react";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
    <NavLink to="/FreeConsultation">
        <button
        className={`fixed right-0 top-1/2 -translate-y-1/2
          bg-[#0369B2] hover:bg-[#0369B2]
          text-white font-semibold py-3 px-2 rounded-l-lg shadow-lg
          transition-all duration-300 ease-in-out z-50
          transform ${isHovered ? "scale-105" : "scale-100"}`}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          console.log("Get Started clicked!");
        }}
      >
        <span className="text-md tracking-wider">GET STARTED</span>
      </button>
    </NavLink>
    </div>
  );
};

export default GetStarted;
