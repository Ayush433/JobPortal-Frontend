import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="2"
          d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,74.7C672,53,768,75,864,112C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute bottom-0 text-white flex justify-center flex-col items-center inset-x-0 top-[50%] ">
        <h1>Develop By</h1>
        <h1>Ayush Adhikari</h1>
        <h2 className="text-red-500">All Right Reserved! 2023</h2>
      </div>
    </div>
  );
};

export default Footer;
