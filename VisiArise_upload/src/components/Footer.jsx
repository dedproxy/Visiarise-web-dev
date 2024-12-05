const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6">
          {/* Logo Section */}
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto cursor-pointer mb-4 lg:mb-0"  // Adds margin on small screens
          />
  
          {/* Navigation Links */}
          <nav className="font-poppins flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <h3 className="font-bold text-normal cursor-pointer hover:text-gray-400">HOME</h3>
            <h3 className="font-bold text-normal cursor-pointer hover:text-gray-400">FEATURES</h3>
            <h3 className="font-bold text-normal cursor-pointer hover:text-gray-400">PAGE LAYOUTS</h3>
            <h3 className="font-bold text-normal cursor-pointer hover:text-gray-400">PAGES</h3>
            <h3 className="font-bold text-normal cursor-pointer hover:text-gray-400">STORE</h3>
          </nav>
  
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <img
              src="/blackfb.png"
              alt="Facebook"
              className="h-8 w-auto cursor-pointer hover:bg-gray-700 p-1 rounded-full"
            />
            <img
              src="/blacktwit.png"
              alt="Twitter"
              className="h-8 w-auto cursor-pointer hover:bg-gray-700 p-1 rounded-full"
            />
            <img
              src="/blackinsta.png"
              alt="Instagram"
              className="h-8 w-auto cursor-pointer hover:bg-gray-700 p-1 rounded-full"
            />
            <img
              src="/blackgmail.png"
              alt="Gmail"
              className="h-8 w-auto cursor-pointer hover:bg-gray-700 p-1 rounded-full"
            />
          </div>
        </div>
  
        {/* Divider */}
        <div className="my-8 w-[90%] mx-auto border-white border-b-2 opacity-25" />
  
        {/* Copyright */}
        <div className="text-center text-gray-400">
          &copy; Copyright. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  