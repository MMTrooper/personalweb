import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { contributions } from "../constants";

const FeedbackCard = ({
  index,
  contribution,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>~</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{contribution}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} to {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-xl object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-indigo rounded-[20px]`}>
      <div
        className={`bg-indigo rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where I have assisted</p>
          <h2 className={styles.sectionHeadText}>Contributions.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {contributions.map((contribution, index) => (
          <FeedbackCard key={contribution.name} index={index} {...contribution} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");