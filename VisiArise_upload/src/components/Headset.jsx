import VR from "../assets/VR.png";

const Headset = () => {
  return (
    <div
      className="h-screen bg-gradient-1 bg-cover bg-center flex items-center justify-center px-4 sm:px-8 overflow-hidden"
    >
      {/* Headset Image with Breath Animation */}
      <img
        id="VR"
        src={VR}
        alt="VR Headset"
        className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[1000px] lg:max-w-[1000px] h-auto rounded-md animate-breath sm:animate-breath-fast md:animate-breath lg:animate-breath-fast"
      />
    </div>
  );
};

export default Headset;
