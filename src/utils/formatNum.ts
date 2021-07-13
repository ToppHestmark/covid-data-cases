export const formatLargeNum = (num: number) =>
  num === undefined ? "-" : new Intl.NumberFormat().format(num);
