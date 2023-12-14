import tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = () => {
  
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum odit deserunt ipsum, voluptatibus dolorum fugit
          sunt qui eaque molestiae? Pariatur modi quis delectus et in vero asperiores animi deserunt voluptate.

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>



    </>
  )
}

export default SectionWrapper(Works, "");