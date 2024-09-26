// components/ClientComponent.js
"use client"; // Ini memastikan komponen dijalankan di client-side

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi
      once: true, // Animasi hanya dijalankan sekali
    });

    // Refresh AOS pada setiap render
    AOS.refresh();
  }, []);

  return null; // Tidak ada elemen visual yang perlu dirender
};

export default ClientComponent;
