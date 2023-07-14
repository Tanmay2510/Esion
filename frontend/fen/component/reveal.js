"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  className,
  variants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
}) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    once: true,
    margin: "100px",
    amount: 0.3,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
