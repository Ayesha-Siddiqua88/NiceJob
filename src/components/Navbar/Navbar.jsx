
import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r bg-white  text-black">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className=" text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider text-black"
              >
                <img src={Logo} alt="Logo" className="w-16" />
                <span className=" text-black font-extrabold">NiceJob</span>
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-green-800 hover:text-green-600 duration-200 font-bold"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className= " bg-black/10 hover:scale-105 duration-200 text-green-800 px-4 py-2 rounded-full flex items-center gap-3 font-bold">
                Find Opportunities
                <FaMagnifyingGlass className="text-xl text-green-800 drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
