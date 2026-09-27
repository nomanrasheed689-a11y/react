import React from 'react'
export default function Footer(){
  return(
    <footer className="bg-gray-900 text-white p-6 sm:p-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">Noman</h2>
        <p className="mt-2 text-xl sm:text-2xl">Frontend Developer</p>
        <p className="mt-2 text-sm sm:text-base text-gray-400">Building modern and responsive websites.</p>
        <div className="flex justify-center gap-6 sm:gap-10 mt-5 text-2xl">
          <a href="#" className="hover:text-blue-500 transition duration-300 "><i className="fa-brands fa-square-facebook"></i></a>
          <a href="#" className="hover:text-blue-500 transition duration-300"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="#" className="hover:text-blue-500 transition duration-300"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <hr className="my-5 border-gray-700"/>
        <p className="text-xs sm:text-sm text-gray-400">© 2026 Noman. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 
