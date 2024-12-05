import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Select the video element and slow it down
    const video = document.getElementById('background-video');
    if (video) {
      video.playbackRate = 1.0; // Slow the video down to 50% speed
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        id="background-video"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Use the path to the video in the public folder */}
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] font-normal font-arimo mb-2">
          VISIARISE
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[70px] font-opensans mb-4 sm:mb-8 md:mb-12">
          Transform your space
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-[20px] font-poppins mb-4 sm:mb-6 md:mb-8">
          VisiARise is an innovative AR service provider platform designed to
          <br className="hidden sm:block" />
          enhance the shopping experience for your brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-20 mb-8">
          <button className="px-6 sm:px-8 md:px-[40px] py-3 sm:py-4 md:py-[20px] text-base sm:text-lg md:text-[25px] border-2 sm:border-4 border-white text-white font-medium rounded-full hover:text-purple-500 transition">
            Get Started
          </button>
          <button className="px-6 sm:px-8 md:px-[40px] py-3 sm:py-4 md:py-[20px] text-base sm:text-lg md:text-[25px] text-white font-medium hover:text-purple-500 transition">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
