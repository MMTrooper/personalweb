import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from "react-scroll";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCylindricalObjectClick = () => {
    // Handle click event action here
    // For example, scroll the page to the desired section
    // You can use libraries like 'react-scroll' or plain JavaScript to achieve this
  };

  const handleCylindricalObjectTouch = () => {
    // Handle touch event action here
    // For example, scroll the page to the desired section
    // You can use libraries like 'react-scroll' or plain JavaScript to achieve this
  };

  const cylindricalObjectClassName = `absolute xs:bottom-2 ${isMobile ? 'bottom-1' : 'bottom-15'} w-full flex justify-center items-center`;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4169e1]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#4169e1]'>Michael</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am currently studying Computer Science <br className='sm:block hidden' />
            and work on interesting projects
          </p>
        </div>
      </div>

      {/* the code for the small cylindrical object. */}
      <ComputersCanvas />
        <Link to='#about' 
        onClick={handleCylindricalObjectClick}
        onTouchStart={handleCylindricalObjectTouch}>
          <div className={cylindricalObjectClassName}>
          <div className='w-[35px] h-[44px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Hero;