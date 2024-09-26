"use client";

import React, { useEffect, useState } from "react";
import Bg from "../_data/bg";
import Link from "next/link";

const banner = () => {
  // State untuk menyimpan URL gambar background
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/img/img_2.jpg"
  );
  const [opacity, setOpacity] = useState(1); // State untuk mengatur opacity

  useEffect(() => {

    // Index untuk melacak gambar saat ini
    let currentBg = 0;

    // Interval untuk mengganti background setiap 3 detik
    const intervalId = setInterval(() => {
      setOpacity(0); // Mulai fade out

      setTimeout(() => {
        currentBg = (currentBg + 1) % Bg.length; // Looping background
        setBackgroundImage(Bg[currentBg]); // Set gambar baru
        setOpacity(1); // Fade in gambar baru
      }, 500); // Durasi fade out
    }, 7000); // Ganti gambar setiap 3 detik

    // Clean up interval saat komponen di-unmount
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
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center">
          <p className="text-3xl max-w-5xl text-balance text-center mb-4 rounded-md text-slate-50 max-lg:mx-2 max-md:mx-4" style={{ fontFamily: 'catamaran-regular, serif' }} >Petualangan kuliner adalah perjalanan melintasi rasa dan budaya. Di setiap langkah, kamu menemukan cerita baru dalam setiap hidangan, mencicipi dunia dengan cara yang paling menggugah selera.</p>
        <Link className="" href="#journey">
          <button className="text-xl p-4 leading-3 hover:scale-105 transition shadow-lg border-2 bg-slate-100 border-gray-800 rounded">
            Start Journey
          </button>
        </Link>
        </div>
      </main>
    </>
  );
};

export default banner;