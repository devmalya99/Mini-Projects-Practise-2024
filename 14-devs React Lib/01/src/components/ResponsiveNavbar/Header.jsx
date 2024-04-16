import React, { useState } from "react";
import "./style.css";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const menuList = ["Products", "Offers", "Pricing", "Career"];
  const [isSideMenuOpen, setMenu] = useState(false);
  return (
    <>
      <div className="flex gap-8">
        <span className="lg:hidden text-6xl"
        onClick={()=>setMenu(true)}
        >
          <HiMenu />
        </span>
        {/* sidebar mobile menu */}
        {
            isSideMenuOpen && 
            <div className=" flex lg:hidden fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 ">
          <section className="text-black bg-slate-50  absolute left-0 top-0 h-screen p-8 z-48 gap-8">
            <AiOutlineClose className="mb-6" 
            onClick={()=>setMenu(false)}
            />
            <div className="flex flex-col">
              {menuList.map((each, i) => {
                return (
                  <span key={i} className="py-2 mb-4 hover-styles">
                    {each}
                  </span>
                );
              })}
            </div>
          </section>
        </div>
        }

        <span className="text-4xl px-6 py-2 font-serif">Logo</span>

        {menuList.map((each, i) => {
          return (
            <span key={i} className="py-2 hover-styles">
              {each}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Header;
