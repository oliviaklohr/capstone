export const repeatReducerForArray = (fn, arr) => {
  const reducedArr = arr.map((item) => fn( item ));
  const flattedReducedArr = reducedArr.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }), {});

  return flattedReducedArr;
};
