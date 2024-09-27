"use client";

import React, { useEffect, useState } from "react";
import Bg from "../_data/bg";
import Link from "next/link";

const banner = () => {
  // State untuk menyimpan URL gambar background
  const [backgroundImage, setBackgroundImage] = useState(Bg[0]); // Set the first image as the initial background
  const [opacity, setOpacity] = useState(1); // State for opacity

  useEffect(() => {
    let currentBg = 0;

    // Interval to change the background every 7 seconds
    const intervalId = setInterval(() => {
      setOpacity(0); // Fade out

      setTimeout(() => {
        currentBg = (currentBg + 1) % Bg.length; // Cycle through Bg array
        setBackgroundImage(Bg[currentBg]); // Set the new background image
        setOpacity(1); // Fade in the new image
      }, 500); // Duration of fade-out
    }, 5000); // Switch background every 7 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className="relative flex h-screen w-full flex-col justify-center items-center">
        <div
          className="absolute -z-10 inset-0 custom-shadow"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            opacity: opacity, // Menggunakan state untuk opacity
            transition: "opacity 0.5s ease-in-out", // Efek transisi untuk opacity
          }}
        >
          {/* <Image
            className="object-cover object-center custom-shadow"
            sizes="100vw"
            fill
            alt="Image"
            src={"/assets/img/img_2.jpg"}
          /> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p data-aos="zoom-in" className="text-3xl max-w-5xl text-balance text-center mb-4 rounded-md text-slate-50 max-lg:mx-2 max-md:mx-4" style={{ fontFamily: 'catamaran-regular, serif' }} >Petualangan kuliner adalah perjalanan melintasi rasa dan budaya. Di setiap langkah, kamu menemukan cerita baru dalam setiap hidangan, mencicipi dunia dengan cara yang paling menggugah selera.</p>
        <Link className="" href="#journey">
          <button data-aos="zoom-in-up" data-aos-duration="1500" className="text-xl p-4 leading-3 hover:scale-105 transition shadow-lg border-2 bg-slate-100 border-gray-800 rounded">
            Start Journey
          </button>
        </Link>
        </div>
      </main>
    </>
  );
};

export default banner;