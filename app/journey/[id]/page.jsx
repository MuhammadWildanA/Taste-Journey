"use client";

import { provs } from "@/app/data/provs";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./journey.css";
import { EffectCards } from "swiper/modules";

const JourneyDetail = ({ params }) => {
  const { id } = params;

  // Cari provinsi berdasarkan id
  const prov = provs.find((p) => p.id === parseInt(id));

  if (!prov) {
    return notFound(); // Jika tidak ditemukan, redirect ke halaman 404
  }

  return (
    <div
      className="min-h-screen  dark:bg-gray-900 text-white dark:text-gray-100"
      style={{
        backgroundImage: `url(${prov.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-16 mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center min-h-screen">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2 lg:w-5/12 max-md:mb-5">
          {prov.makanan && prov.makanan.length > 0 ? (
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {prov.makanan.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col h-full items-center">
                    <Image
                      src={item.foto}
                      className="h-80 w-96"
                      width={500}
                      height={500}
                      alt={`Makanan ${index + 1}`}
                    />
                    <h3 className="text-lg flex items-center font-semibold h-full text-center">{item.nama}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-xl">data makanan tidak tersedia.</p>
            </div>
          )}
        </div>

        {/* Right Side (Text) */}
        <div className="w-full md:w-1/2 lg:w-6/12 bg-slate-950 bg-opacity-70 p-5 rounded-md">
          <h2 className="text-5xl font-bold text-center mb-5">{prov.name}</h2>
          <p
            className="text-base"
            dangerouslySetInnerHTML={{ __html: prov.article }}
          ></p>
          <a href="#read-more" className="text-blue-600 hover:underline">
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default JourneyDetail;
