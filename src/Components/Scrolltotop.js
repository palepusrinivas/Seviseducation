import React, { useState, useEffect } from "react";


const Scrolltotop = () => {

   const [show, setShow] = useState(false);
  const [percent, setPercent] = useState(0);

  const radius = 20; // radius of the circle
  const strokeWidth = 4; // thickness of the circle
  const size = radius * 2 + strokeWidth * 2; // total SVG size
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPercent(Math.round((winScroll / height) * 100));
      setShow(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

     <>
      {show && (
        <div
          className="fixed right-4 md:right-6 bottom-4 cursor-pointer"
          onClick={handleClick}
        >
          <div className="relative w-[48px] h-[48px]">
            {/* Background Circle */}
            <svg width={size} height={size}>
              <circle
                stroke="#FF0013"
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
              />
              {/* Progress Circle */}
              <circle
                stroke="#0369B2"
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (percent / 100) * circumference}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
              />
            </svg>

            {/* Centered Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">&#11105;</span>
            </div>
          </div>
        </div>
      )}
    </>
  )

}

export default Scrolltotop