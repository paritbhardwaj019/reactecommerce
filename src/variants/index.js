export const headerImageVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    tranisition: {
      duration: 1,
      type: "tween",
      stiffness: 100,
      duration: 2,
    },
  },
};

export const headerContentVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    tranisition: {
      duration: 1,
      type: "tween",
      stiffness: 100,
      duration: 2,
    },
  },
};

export const generalHoverVariants = {
  whileHover: {
    scale: 1.1,
  },
};

export const categoryVariants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    tranisition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
