"use client";
import {provs} from "./../../../_data/provs";
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
    <div className="min-h-screen py-16 flex-col justify-center">
      <h1 className="text-center mt-10 mb-7 font-bold text-5xl">Makanan Khas {prov.name}</h1>
      {prov.makanan.map((item, index) => (
        <div
          key={index}
          className={`w-full py-5 flex flex-col md:flex-row gap-5 px-28 items-center ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Left/Right Side (Image) */}
          <div className="w-1/2 flex justify-center items-center p-2">
            <Image
              src={item.foto}
              className="rounded shadow-lg object-cover"
              width={400}
              height={400}
              alt={`Makanan ${item.nama}`}
              style={{ aspectRatio: "1 / 1" }} // Mengatur agar gambar tetap proporsional
            />
          </div>

          {/* Left/Right Side (Description) */}
          <div className="w-full flex flex-col">
              {/* Title on the opposite side of text */}
              <h2 className={`text-3xl w-full font-bold mb-2 text-${
                  index % 2 === 0 ? "left" : "right"} max-md:text-center`}>
                {item.nama}
              </h2>
            <p className={`leading-relaxed max-md:text-center text-base text-${
                  index % 2 === 0 ? "left" : "right"}`}>{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyDetails;
