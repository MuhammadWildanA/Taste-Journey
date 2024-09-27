// Hampers.jsx
import React from "react";
import { provs } from "../_data/provs";
import Image from "next/image";
import Link from "next/link";

const Journey = () => {
  return (
    <div
      id="journey"
      className="dark bg-black text-gray-100 min-h-screen flex justify-center items-center"
    >
      <div className="flex flex-col items-center py-8 w-full">
        {/* Responsive grid that adapts to any number of items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 w-full px-4">
          {provs.map((prov) => (
            <div
              data-aos="zoom-in-down"
              key={prov.id}
              className="border rounded-lg shadow-md p-4 bg-gray-800 border-gray-700 transition duration-200 hover:scale-105"
            >
              <Link href={`/journey/${prov.id}`}>
                <Image
                  src={prov.image}
                  alt={prov.name}
                  className="rounded-lg mb-3 h-60"
                  width={1000}
                  height={0}
                />
                <h2 className="text-lg font-semibold text-center">
                  {prov.name}
                </h2>
                <p className="text-gray-300 mb-4 text-center">{prov.imgDetail}</p>

                <button className="bg-slate-200 text-gray-900 py-2 px-4 rounded hover:bg-slate-300 transition-all duration-300 w-full">
                  {prov.capt}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
