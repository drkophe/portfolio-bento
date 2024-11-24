'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { image } from 'framer-motion/client';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
//   console.log(scrollYProgress.get());
  

  return (
    <main className='overflow-clip scroll-smooth'>
        <section className="flex items-center justify-start  w-fit h-screen bg-neutral-900 sticky top-0 z-10">
            <motion.div
            className='flex items-center justify-start ml-60 space-x-10'
            style={{
                // transform: `translateX(-${scrollPercentage * 50}%)`,
                transform: `translateX(-${scrollYProgress.get() * 50}%)`,
                // scaleX: scrollYProgress,
                // left
            }}
            >
                {images.map((image, index) => (
                    <div className="relative h-96 aspect-10/13 overflow-hidden bg-black"  key={index}>
                        {/* Boucle sur le tableau image pour afficher les images */}
                            <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover object-left"
                            style={{
                                transition: "transform 0.3s ease-in-out",
                                objectPosition: `${scrollYProgress.get() * 100}% center`,
                                }}
                            />
                    </div>
                ))}
            </motion.div>
        </section>
        <section className='h-[650vh]'></section>
    </main>
  );
}
