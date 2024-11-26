'use client';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { style } from "framer-motion/client";

export default function Page() {

  // Tableau d'image
  const images = [
    "/img/img1.jpg",
    "/img/img2.jpg",
    "/img/img3.jpg",
    "/img/img4.jpg",
    "/img/img6.jpg",
    "/img/img1.jpg",
    "/img/img2.jpg",
  ];

  const { scrollYProgress } = useScroll()
  const smoothProgress  = useSpring(scrollYProgress, { stiffness: 50, damping: 30, restDelta: 0.001 })

  const x = useTransform(smoothProgress , [0, 1], ["0%", "-50%"]);
  const objectPositionX = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className='overflow-clip scroll-smooth'>
        <section className="flex items-center justify-start  w-fit h-screen bg-neutral-900 sticky top-0 z-10">
            <motion.div
            className='flex items-center justify-start ml-60 space-x-6 progress-bar'
            style={{ x }}
            >
                {images.map((image, index) => (
                    <div 
                      className="relative h-96 aspect-10/13 overflow-hidden bg-black"  
                      key={index}
                      onClick={() => { 
                        // faire une animation pour que l'image s'affiche en plein milieu
                        
                       }}
                    >

                        {/* Boucle sur le tableau image pour afficher les images */}

                            <motion.img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="object-cover h-full w-full"
                            style={{ 
                              objectPosition: objectPositionX, 
                            }}
                            />

                    </div>
                ))}
            </motion.div>
        </section>
        <section className='h-[200vh]'></section>
    </main>
  );
}
