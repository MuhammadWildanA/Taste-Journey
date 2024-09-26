import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Nama atau Branding */}
        <h1 className="text-xl font-semibold mb-2">Taste Journey</h1>
        
        {/* Deskripsi */}
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Ratione veniam
          amet autem sunt, perspiciatis nemo.
        </p>
        
        {/* Ikon media sosial */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-500 px-2 text-sm">
          Copyright ©2024 Taste Journey. Design by <a href="#" className="text-white">Jawara Team</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
