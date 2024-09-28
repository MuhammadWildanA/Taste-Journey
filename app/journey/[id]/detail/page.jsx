"use client";
import { provs } from "./../../../_data/provs";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

const JourneyDetails = ({ params }) => {
  const { id } = params;

  // Cari provinsi berdasarkan id
  const prov = provs.find((p) => p.id === parseInt(id));

  if (!prov) {
    return notFound(); // Jika tidak ditemukan, redirect ke halaman 404
  }

  return (
    <div className="min-h-screen py-16 flex-col justify-center bg-slate-50">
      <h1 data-aos-duration="500" data-aos="fade-down" className="text-center mt-10 mb-7 font-bold text-5xl">
        Makanan Khas {prov.name}
      </h1>
      {prov.makanan.map((item, index) => (
        <div
          key={index}
          className={`w-full py-5 flex items-center flex-col md:flex-row gap-5 px-7 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Left/Right Side (Image) */}
          <div className="w-1/2 flex justify-center items-center p-2">
            <Image
              src={item.foto}
              className="rounded shadow-xl object-cover"
              width={400}
              height={400}
              alt={`Makanan ${item.nama}`}
              style={{ aspectRatio: "1 / 1" }} // Mengatur agar gambar tetap proporsional
              data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
            />
          </div>

          {/* Left/Right Side (Description) */}
          <div className="w-full flex flex-col">
            {/* Title on the opposite side of text */}
            <h2
              data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-duration="1500"
              className={`text-3xl w-full font-bold mb-2 ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              } text-center`}
            >
              {item.nama}
            </h2>
            <p
            data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-duration="2000"
              className={`leading-relaxed text-center text-base p-3 bg-slate-100 shadow-md shadow-slate-700 rounded-sm ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}
              dangerouslySetInnerHTML={{ __html: item.deskripsi }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyDetails;
