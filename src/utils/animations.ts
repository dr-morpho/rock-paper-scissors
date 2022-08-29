export const scaleMap = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const scale = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
};
