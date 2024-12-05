import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false); // Initially, the overlay is hidden
  const [inView, setInView] = useState(false); // To track if the demo is in view

  // Reference to the demo section to observe if it's in view
  const demoRef = useRef(null);

  // Example product data
  const products = [
    { id: 1, name: "Product 1", image: "/product-1.png" },
    { id: 2, name: "Product 2", image: "/product-2.png" },
    { id: 3, name: "Product 3", image: "/product-3.png" },
    { id: 4, name: "Product 4", image: "/product-4.png" },
    { id: 5, name: "Product 5", image: "/product-5.png" },
    { id: 6, name: "Product 6", image: "/product-6.png" },
    { id: 7, name: "Product 7", image: "/product-7.png" },
    { id: 8, name: "Product 8", image: "/product-8.png" },
    { id: 9, name: "Product 9", image: "/product-9.png" },
    { id: 10, name: "Product 10", image: "/product-10.png" },
    { id: 11, name: "Product 11", image: "/product-11.png" },
    { id: 12, name: "Product 12", image: "/product-12.png" },
  ];

  const steps = [
    "Click 'Add to Cart' to add a product to your cart.",
    "You can hover over a product for more actions.",
    "Use the back and skip buttons to navigate.",
  ];

  // Intersection Observer for detecting when demo comes into view
  useEffect(() => {
    const currentDemoRef = demoRef.current; // Store current ref in a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Set in view to true when demo section comes into view
        } else {
          setInView(false); // Set in view to false when demo section is out of view
        }
      },
      { threshold: 0.5 }
    );

    if (currentDemoRef) {
      observer.observe(currentDemoRef);
    }

    // Clean up observer when component unmounts
    return () => {
      if (currentDemoRef) {
        observer.unobserve(currentDemoRef);
      }
    };
  }, []);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowOverlay(false); // Hide overlay after the last step
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => setShowOverlay(false);

  const handleAddToCart = (product) => {
    toast.success(`${product.name} added to cart!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  // Trigger demo overlay when image is clicked
  const handleImageClick = () => {
    if (inView) {
      setShowOverlay(true); // Show the overlay only if demo is in view
    }
  };

  return (
    <div>
      {/* Demo Section */}
      <div
        ref={demoRef}
        className="h-screen bg-gradient-3 from-purple-500 via-pink-500 to-red-500 bg-cover bg-center w-full overflow-hidden relative"
      >
        {/* Guide Overlay */}
        {showOverlay && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg mb-4">{steps[currentStep]}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleBackStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                  disabled={currentStep === 0}
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
                <button
                  onClick={handleSkip}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group"
              onClick={handleImageClick} // Trigger demo on image click
            >
              {/* Product Image with Breathing Animation */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 product-image"
              />
              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering image click event
                  handleAddToCart(product);
                }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
