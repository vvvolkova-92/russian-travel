type TGetRandom = (min: number, max: number) => number;
export const getRandom:TGetRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArray = () => {
  let array:number[] = [];
  for (let i = 0; i < 9; i++) {
    array.push(getRandom(0, 1000));
  };
  return array;
};