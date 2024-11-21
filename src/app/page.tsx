'use client';

import {motion } from "framer-motion";
import Image from "next/image";

export default function Page() {



  return (

    <motion.main className="flex items-center justify-center w-full h-screen relative">
      {/* <div className="w-4 h-4 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div> */}

      <section className="flex items-center justify-center w-full h-screen absolute top-0 left-0">

        <div className="w-full h-screen bg-white flex items-center justify-start gap-4 flex-col p-4">

          {/* Up */}
          <div className="w-full h-[10.5vh] relative flex justify-center items-center gap-4">
            <motion.div
              className="w-full h-full p-6 bg-primary-300 rounded-xl flex items-center justify-between"
              // initial={{ opacity: 0.5, scale: 0, y: 70 }}
              // animate={{ opacity: 1, scale: 1, y: 0 }}
              // transition={{ duration: 0.5,
              //   delay: 1  }}
              initial={{ opacity: 0.5, scale: 0, y: 70 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.5,
                delay: 1.8,
                ease: "circOut",
                // type: "spring",
                bounce: 0,  
              }}
            >
              <div className="w-fit h-full flex items-center justify-center">
                <h1 className="text-2xl text-black font-gilroy font-light italic uppercase">Julia <span className="font-medium not-italic">Huang</span></h1>
              </div>
              <ul className="w-fit h-full flex items-center justify-center gap-6">
                <li className="text-base text-black font-gilroy font-light uppercase">Project</li>
                <li className="text-base text-black font-gilroy font-light uppercase">About</li>
                <li className="text-base text-black font-gilroy font-light uppercase">Contact</li>
              </ul>
            </motion.div>
          </div>

          {/* Down */}
          <div className="w-full h-[85vh] relative flex  gap-4 ">

            {/* Left */}
            <div className="w-4/6 h-full  gap-4 flex flex-col justify-end">

              {/* Up Left */}
              <div className="h-3/5 gap-4 flex flex-row">

                {/* Title */}
                <motion.div 
                  className="w-7/12 h-full flex justify-end items-end"
                  initial={{
                    width: "58.3%",
                  }}
                  animate={{
                    width: "66.6%",
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.3,
                    ease: "circOut",
                    // type: "tween",
                      bounce: 0,    
                  }}
                >
                  <motion.div
                    className="w-full h-full bg-primary-300 rounded-xl"
                    initial={{ opacity: 0.6, scale: 0, x: 470, y: 60 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ 
                      duration: 1.45,
                      delay: 1.85,
                      // duration: 1.3,
                      // delay: 2,
                      ease: "circOut",
                      // type: "spring",
                      bounce: 0,  
                    }}
                  >

                  </motion.div>
                </motion.div>

                {/* Profil Picture */}
                <motion.div 
                  className="bg-primary-300 rounded-xl w-2/6 h-full relative z-20"
                  initial={{ scale: 1.2,}}
                  animate={{ scale: 1,}}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeIn",
                    type: "spring",
                    // bounce: 0,  
                   }}

                >
                  <Image
                    src="/img/asiat.png"
                    alt="asiat"
                    fill
                    className="rounded-xl object-cover object-center"
                  />
                </motion.div>

              </div>

              {/* Down Left */}
              <motion.div 
                className="h-1/4 gap-4 flex flex-row"
                initial={{
                  height: "25%",
                }}
                animate={{
                  height: "40%",
                }}
                transition={{ 
                  duration: 2,
                  delay: 1.3,
                  ease: "circOut",
                  // type: "spring",
                  bounce: 0,   
                }}                
              >

                {/* Description */}
                <div className="rounded-xl w-3/6 flex items-start justify-start">
                  <motion.div 
                    className="bg-primary-300 rounded-xl w-full h-full"
                    initial={{ opacity: 0.5, scale: 0, x: 470, y: -160 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ 
                      duration: 1.35,
                      delay: 1.95, 
                      // duration: 1,
                      // delay: 2.3,
                      ease: "circOut",
                      // type: "spring",
                      bounce: 0,  
                    }}
                  >

                  </motion.div>
                </div>

                {/* Contact */}
                <div className="rounded-xl w-3/6">
                  <motion.div 
                    className="bg-primary-400 rounded-xl w-full h-full"
                    initial={{ opacity: 0.5, scale: 0, x: 70, y: -160 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.3,
                      delay: 2,  
                      // duration: 0.8,
                      // delay: 2.5,
                      ease: "circOut",
                      // type: "spring",
                      bounce: 0,  
                    }}
                  ></motion.div>
                </div>
              
              </motion.div>

            </div>

            {/* Right */}
            <div className="w-2/6 h-full  gap-4 flex flex-col">

              {/* Projects */}
              <div className="rounded-xl w-full h-5/6">
                <motion.div 
                  className="bg-primary-300 h-full rounded-xl w-full"
                  initial={{ opacity: 0.7, scale: 0, x: -470, y: -160 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ 
                    duration: 1.4,
                    delay: 1.9,
                    // duration: 1.25,
                    // delay: 2.05,
                    ease: "circOut",
                    // type: "spring",
                    bounce: 0,  
                  }}
                >

                </motion.div>
              </div>

              {/* Footer */} 
              <div className="rounded-xl w-full h-1/6">
                <motion.div 
                  className="bg-primary-300 rounded-xl w-full h-full"
                  initial={{ opacity: 0.5, scale: 0, x: 0, y: -150 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 1.35,
                    delay: 1.95, 
                    // duration: 1.1,
                    // delay: 2.2,
                    ease: "circOut",
                    // type: "spring",
                    bounce: 0,  
                  }}
                ></motion.div>  
              </div>

            </div>

          </div>

        </div>

      </section>

    </motion.main>



    // <motion.main className="flex items-center justify-center w-full h-screen relative">
    //   <div className="w-4 h-4 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>

    //   <section className="flex items-center justify-center w-full h-screen absolute top-0 left-0">

    //     <div className="w-full h-screen bg-white grid gap-4 grid-cols-12 grid-rows-8 p-4">

    //       {/* Nav */}
    //       <div className=" col-span-full row-span-1 relative flex justify-center items-center">
    //         <motion.div
    //           className="w-full h-full bg-[#FADCD9] rounded-xl"
    //           initial={{ opacity: 0.5, scale: 0, y: 70 }}
    //           animate={{ opacity: 1, scale: 1, y: 0 }}
    //           transition={{ duration: 0.5 }}
    //         >

    //         </motion.div>
    //       </div>

    //       {/* Title */}
    //       <div className="col-span-5 row-span-4 flex justify-end items-end">
    //         <motion.div
    //           className="w-full h-full bg-[#FADCD9] rounded-xl"
    //           initial={{ opacity: 0.5, scale: 0, x: 270, y: 60 }}
    //           animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
    //           // initial={{ opacity: 0.5, scale: 0, x: 270, y: 60 }}
    //           // animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
    //           transition={{ duration: 0.5 }}
    //         >

    //         </motion.div>
    //       </div>

    //       {/* Profil Picture */}
    //       <motion.div 
    //         className="bg-[#FADCD9] rounded-xl col-span-3 row-span-4 relative"
    //         initial={{ scale: 1.2, y: 70 }}
    //         animate={{ scale: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}

    //       >
    //         <Image
    //           src="/img/asiat.png"
    //           alt="asiat"
    //           layout="fill"
    //           objectFit="cover"
    //           objectPosition="right center"
    //           className="rounded-xl"
    //         />
    //       </motion.div>

    //       {/* Projects */}
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-6"></div>

    //       {/* Description */}
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-3"></div>

    //       {/* Contact */}
    //       <div className="bg-[#F8AFA6] rounded-xl col-span-4 row-span-3"></div>

    //       {/* Footer */} 
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-1"></div>
    //     </div>

    //   </section>

    //   {/* <section className="flex items-center justify-center w-full h-screen absolute top-0 left-0">
    //     <div className="w-full h-screen bg-white grid gap-4 grid-cols-12 grid-rows-8 p-4">
    //       <div className="bg-[#FADCD9] rounded-xl col-span-12 row-span-1"></div>
    //       <div className="bg-[#FADCD9] rounded-xl col-span-5 row-span-4"></div>
    //       <div className="bg-[#FADCD9] rounded-xl col-span-3 row-span-4 relative">
    //         <Image
    //           src="/img/asiat.png"
    //           alt="asiat"
    //           layout="fill"
    //           objectFit="cover"
    //           objectPosition="right center"
    //           className="rounded-xl"
    //         />
    //       </div>
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-6"></div>
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-3"></div>
    //       <div className="bg-[#F8AFA6] rounded-xl col-span-4 row-span-3"></div>
    //       <div className="bg-[#FADCD9] rounded-xl col-span-4 row-span-1"></div>
    //     </div>
    //   </section> */}

    // </motion.main>
  );
}