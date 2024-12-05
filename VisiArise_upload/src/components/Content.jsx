const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-custom-gradient py-5 px-5"> 
      <img
        src="/black-hset-girl.png"
        alt="AR VR Image"
        className="h-auto w-full lg:w-auto lg:h-auto ml-0 lg:ml-1 cursor-pointer"  
      />
      <div className="flex-1 mt-10 text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-wide text-white">
        EDUCATION MODEL
        <div className="flex flex-col justify-start text-lg sm:text-xl lg:text-xl font-normal text-white text-justify my-8">
          <p className="mb-2">
            Visiarise is an AR SaaS platform that helps businesses transform their customer experience by
            allowing users to visualize products in their real-world spaces before purchase. Our technology is designed to boost customer confidence, reduce returns, and drive sales.
          </p>
          <p className="mb-2">
            Experience shopping like never before. Visiarise uses cutting-edge AR technology to transform how customers interact with products—right from their homes or offices.
          </p>
          <p className="mb-2">
            Visiarise is transforming how customers shop by merging the digital and physical worlds through cutting-edge AR technology. Imagine being able to visualize products right where you want them before making a purchase.
          </p>
          <p>
            This powerful tool enhances customer satisfaction and boosts business results. Discover how we’re redefining the shopping experience for both brands and buyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
