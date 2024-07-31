import React, { forwardRef }  from 'react'
import hi from '../assets/hi.png'
import locationwhite from '../assets/location-black.svg'
import locationblack from '../assets/location-white.svg'
import downblack from '../assets/down-black.svg'
import downwhite from '../assets/down-white.svg'
import sparkle from '../assets/sparkle.svg'

const Home = forwardRef(({theme, nextSectionRef }) => {
  const locationImage = theme === 'dark' ? locationwhite : locationblack;
  const chevrondown = theme === 'dark' ? downwhite : downblack;

  const handleChevronClick = () => {
    nextSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className='pt-[84px]'>
      <div className="flex justify-center mt-3">
        <img src={sparkle} alt="sparkle" className="h-3 w-3" />
      </div>

      <div className="flex justify-end">
        <img src={sparkle} alt="sparkle" className="h-5 w-5 ml-5" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex items-center justify-center">
          <img src={sparkle} alt="sparkle" className="h-4 w-4" />
          <img src={hi} alt="hi" className="h-80 w-80 md:h-96 md:w-96 object-cover mx-2" />
          <img src={sparkle} alt="sparkle" className="h-5 w-5" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center justify-center font-poppins">
          <img src={sparkle} alt="sparkle" className="h-5 w-5 mb-2" />
          <h1 className="font-semibold text-3xl md:text-5xl text-center md:text-left">I'm Abigail.</h1>
          <p className="mt-3 text-center md:text-left">
            A software engineer with expertise in .NET and React.js
            focusing on building robust and efficient web applications.✨
          </p>
          <div className="flex items-center mt-3">
            <img src={locationImage} alt="location" className="h-6 w-6" />
            <p className="ml-2">Nigeria</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center animate-bounce pt-4">
        <img
          src={chevrondown}
          alt="chevron down"
          className="h-6 w-6 cursor-pointer"
          onClick={handleChevronClick}
        />
      </div>

      <div className="flex justify-end">
        <img src={sparkle} alt="sparkle" className="h-5 w-5" />
      </div>

      <img src={sparkle} alt="sparkle" className="h-3 w-3" />
    </section>
  );
});


export default Home;