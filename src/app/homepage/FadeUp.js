
'use client'
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeUp({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.8 }}
        variants={{
          visible: {
            opacity: 1,
            y: 0, // Move the component upward (fade-up effect)
            scale: 1,
          },
          hidden: {
            opacity: 0,
            y: 100, // Move the component down slightly to hide it initially
            scale: 1,
          },
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeUp;

