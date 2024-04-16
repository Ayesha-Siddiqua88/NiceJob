
import React from "react";
import HeroPng from "../../assets/website/slider2.png";
import HeroPng2 from "../../assets/website/slider21.png";
import { MdOutlineContactPage } from "react-icons/md";


const Hero = () => {
  return (
    <>
      <div className="min-h-[560px] sm:min-h-[620px] bg-gradient-to-r justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black mt-40"
              >
                Unlock Your Potential in{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b text-green-950 font-extrabold"
                >
                  Japan
                </span>{" "}
              </h1>
              <br></br>
              <div className="flex flex-row">
               <div className="flex flex-col">
                <img data-aos-once="true" src={HeroPng2} alt="biryani img" className="w-[200px] sm:w-[200px] sm:scale-125" />
                <h4 className="text-black mx-20 mt-3">10k+ candidates got jobs</h4>
                </div>
                <div className="flex flex-row justify-center text-black">
                <MdOutlineContactPage className="text-xxl text-green-800 drop-shadow-sm cursor-pointer text-2xl" />
                <h1 className="mt">upload your resume</h1>
                </div>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="biryani img"
                className="w-[200px] sm:w-[350px] sm:scale-125 mx-auto mt-20"
              />
            </div>


            

          </div>
          <div className="flex overflow-hidden space-x-16 mt-20 mb-0 font-bold py-2">
              <div className="flex space-x-16 animate-loop-scroll text-green-800">
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                    <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
              </div>
              <div className="flex space-x-16 animate-loop-scroll text-green-950" aria-hidden="true">
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
                <h5 className="bg-white/30 px-2 py-2 whitespace-nowrap">get your first job!</h5>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
