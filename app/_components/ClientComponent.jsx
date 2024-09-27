// components/ClientComponent.js
"use client"; // Ini memastikan komponen dijalankan di client-side

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animasi hanya dijalankan sekali
      mirror: true,
      easing: "ease"
    });

    // Refresh AOS pada setiap render
    AOS.refresh();
  }, []);

  return null; // Tidak ada elemen visual yang perlu dirender
};

export default ClientComponent;
