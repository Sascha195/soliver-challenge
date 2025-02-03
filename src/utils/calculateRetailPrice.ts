export const calculateRetailPrice = (
  retailPrice: number,
  discount?: number,
): number => {
  if (discount) {
    return Math.round(retailPrice * (1 - discount / 100) * 100) / 100;
  }
  return retailPrice;
};
