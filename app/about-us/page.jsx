import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center py-24 px-4 ">
      {/* Bagian Judul */}
      <div className="text-center mb-7">
        <h3 className="text-sm uppercase tracking-wide text-gray-500">About Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Taste Journey: Menelusuri Keajaiban Kuliner.</h1>
        <p className="text-lg text-gray-600 mt-4">Bersama Menyusuri Setiap Rasa!.</p>
      </div>

      {/* Bagian Card Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt=""
            sizes='cover'
          />
          <h4 className="text-lg font-semibold text-gray-900">Hafizh Arrasyiid Syahbana</h4>
          <p className="text-sm text-gray-500 mt-2">
          1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="/febriyan.png"
            alt="SEO Website Design"
          />
          <h4 className="text-lg font-semibold text-gray-900">Moch Febriyan Heraldo</h4>
          <p className="text-sm text-gray-500 mt-2">
          saya adalah seorang software developer yang bersekolah di smkn 1 bangil, saya memiliki beberapa skill seperti editing, desain,  word, excel, html, css, c#, mysql
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
          <img
            className="h-48 w-48 mx-auto rounded-full mb-4"
            src="https://via.placeholder.com/666"
            alt="SEO Consulting"
          />
          <h4 className="text-lg font-semibold text-gray-900">Muhammad Wildan Abdillah</h4>
          <p className="text-sm text-gray-500 mt-2">
            Hello World
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
