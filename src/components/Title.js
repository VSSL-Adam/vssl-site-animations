import { motion } from "framer-motion";

const H1 = ({ text, delay = 0, duration = 0.05, replay, ...props }) => {
  const characters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        type: "intertia",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      x: 20,
      rotate: 30,
    },
  };

  return (
    <motion.h1
      className="text-gold text-4xl font-gin flex justify-center overflow-hidden lg:text-6xl"
      variants={container}
      initial="hidden"
      animate={"visible"}
      {...props}
    >
      {characters.map((character, index) => (
        <motion.span key={index} variants={child}>
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default H1;
