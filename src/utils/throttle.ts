export const throttle = (delay: number, cb: any) => {
  let shouldWait = false;

  return (args: any) => {
    if (shouldWait) return;

    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, delay);

    return cb(args);
  };
};
