import { useEffect, useState } from 'react';

const Services = () => {
  const [inViewH1, setInViewH1] = useState(false);
  const [inViewH2, setInViewH2] = useState(false);
  const [inViewButton, setInViewButton] = useState(false); // State for button animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInViewH1(true); // Trigger h1 animation when it's in view
        } else {
          setInViewH1(false); // Optionally reset if h1 goes out of view
        }
      },
      {
        threshold: 0.5,
      }
    );

    const h1Element = document.querySelector('#services-header');
    if (h1Element) {
      observer.observe(h1Element);
    }

    const observerH2 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInViewH2(true); // Trigger h2 animation when it's in view
        } else {
          setInViewH2(false); // Optionally reset if h2 goes out of view
        }
      },
      {
        threshold: 0.5,
      }
    );

    const h2Element = document.querySelector('#services-subheader');
    if (h2Element) {
      observerH2.observe(h2Element);
    }

    const observerButton = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInViewButton(true); // Trigger button animation when it's in view
        } else {
          setInViewButton(false); // Optionally reset if button goes out of view
        }
      },
      {
        threshold: 0.5,
      }
    );

    const buttonElement = document.querySelector('#work-with-us-button');
    if (buttonElement) {
      observerButton.observe(buttonElement);
    }

    return () => {
      if (h1Element) {
        observer.unobserve(h1Element);
      }
      if (h2Element) {
        observerH2.unobserve(h2Element);
      }
      if (buttonElement) {
        observerButton.unobserve(buttonElement);
      }
    };
  }, []);

  return (
    <div className="h-[500px] bg-gradient-2 bg-center bg-cover px-2 sm:px-8 overflow-hidden relative">
      <h1
        id="services-header"
        className={`text-white font-helvetica font-bold text-[50px] sm:text-[100px] self-start leading-[1] mb-8 ml-2 ${
          inViewH1 ? 'animate-reveal-baseline' : ''
        }`}
      >
        THE SERVICES <br className="block mt-[-20px]" />
        WE OFFER
      </h1>
      <h2
        id="services-subheader"
        className={`text-white font-helvetica font-normal text-[18px] sm:text-[30px] self-start leading-normal ml-4 mb-4 sm:mb-6 ${
          inViewH2 ? 'animate-reveal-left' : ''
        }`}
      >
        We are an award-winning design agency that enables <br className="block mt-[-20px]" />
        brands to make their mark in history.
      </h2>

      {/* Align button to the extreme left on mobile, below the second statement */}
      <div className="flex justify-start sm:justify-end mt-8 sm:mt-12">
      <button
          id="work-with-us-button"
          className={`text-white text-lg font-bold px-8 sm:px-12 py-4 rounded-full sm:-mt-28 mt-8 absolute ${
            inViewButton ? 'animate-reveal-right' : ''
          }`}
          style={{
            background: 'linear-gradient(to right, #3b82f6, #ec4899)',
          }}
        >
          WORK WITH US
        </button>
      </div>
    </div>
  );
};

export default Services;
