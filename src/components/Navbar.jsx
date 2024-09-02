import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className=" NavbarHeading text-red-500 text-3xl font-semibold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4	">SIGN UP</button>
        <button className="text-white bg-red-600 px-4 py-1 rounded-md	">SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
