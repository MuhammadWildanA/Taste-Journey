import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col bg-gray-50 items-center py-24 px-4 ">
      {/* Bagian Judul */}
      <div className="text-center mb-7">
        <h3 data-aos="fade-down" data-aos-duration="3000" className="text-sm uppercase tracking-wide text-gray-500">About Us</h3>
        <h1 data-aos="fade-down" data-aos-duration="2000" className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Taste Journey: Menelusuri Keajaiban Kuliner.</h1>
        <p data-aos="fade-down" data-aos-duration="1000" className="text-lg text-gray-600 mt-4">Bersama Menyusuri Setiap Rasa!.</p>
      </div>

      {/* Bagian Card Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div 
        data-aos="flip-left"
        data-aos-duration="1000"
        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="/hafizh.png"
            sizes='cover'
          />
          <h4 className="text-lg font-semibold text-gray-900">Hafizh Arrasyiid Syahbana</h4>
          <p className="text-sm text-gray-500 mt-2">
          Nama saya Hafizh Arrasyiid Syahbana, seorang pengembang aplikasi mobile. Saat ini, saya bersekolah di SMKN 1 Bangil. Selain itu, saya juga menyukai buah nanas.
          </p>
        </div>

        {/* Card 2 */}
        <div 
        data-aos="flip-down"
        data-aos-duration="2000"
        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="/wildan.png"
          />
          <h4 className="text-lg font-semibold text-gray-900">Muhammad Wildan Abdillah</h4>
          <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet.<br></br> Assalamualaikum have we ever met?</p>
        </div>

        {/* Card 3 */}
        <div
        data-aos="flip-right"
        data-aos-duration="1500"
        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="/febriyan.png"
          />
          <h4 className="text-lg font-semibold text-gray-900">Moch Febriyan Heraldo</h4>
          <p className="text-sm text-gray-500 mt-2">
          saya adalah seorang software developer yang bersekolah di smkn 1 bangil, saya memiliki beberapa skill seperti editing, desain,  word, excel, html, css, c#, mysql
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
