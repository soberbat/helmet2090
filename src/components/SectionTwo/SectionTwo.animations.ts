export const parentVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3 },
  },
};

export const childVariant = {
  initial: { y: -50, opactiy: 0 },
  animate: {
    y: 0,
    opacity: 1,
    ease: "easeIn",
    duration: 1,
  },
};
