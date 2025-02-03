import {calculateRetailPrice} from './calculateRetailPrice';

describe('calculateRetailPrice', () => {
  it('should return the original price if no discount is provided', () => {
    const retailPrice = 100;
    const discount = undefined;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(100);
  });

  it('should correctly apply a 10% discount', () => {
    const retailPrice = 100;
    const discount = 10;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(90);
  });

  it('should correctly apply a 25% discount', () => {
    const retailPrice = 59.99;
    const discount = 25;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(44.99);
  });

  it('should return retail price as a string when discount is applied', () => {
    const retailPrice = 50;
    const discount = 5;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(47.5);
  });

  it('should handle a 0% discount correctly', () => {
    const retailPrice = 99.99;
    const discount = 0;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(99.99);
  });

  it('should return the correct price for a high discount (90%)', () => {
    const retailPrice = 500;
    const discount = 90;

    const result = calculateRetailPrice(retailPrice, discount);

    expect(result).toBe(50.0);
  });
});
