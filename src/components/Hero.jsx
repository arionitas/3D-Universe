import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
    <section className="relative w-full h-screen
    mx-auto">
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full
          bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 
          violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}
          >Hi, I'm Arion</h1>
          <h1 className={`${styles.heroHeadText}`} 
          ><span className="text-[#915eff]">AKA ARXIVN</span></h1>
            <p className={`${styles.heroSubText} mt -2
             text-white-100`}> I'm a Creative Designer focusing
             on sustainable <br className="sm:block hidden" /> 
             design and wholesome user experiences.
             </p>
        </div>
      </div>
      
             <ComputersCanvas />

             <div className="absolute xs:bottom-0
             bottom-32 w-full flex justify-center
             items-center">
              <a href="#about">
                <div className="w-[35px] h-[64px]
                rounded-3xl border-2 border-secondary
                flex justify-center items-start p-3">
                  


                  <motion.dev 
                  animate={{
                    y: [0, 24, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-3 h-3 rounded-full
                  bg-secondary mb-1"
                  
                  />
                </div>
              </a>
             </div>
    </section>
  )
}

export default Hero