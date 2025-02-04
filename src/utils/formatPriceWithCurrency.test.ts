import {formatPriceWithCurrency} from './formatPriceWithCurrency';

describe('formatPrice', () => {
  // 🟢 Valid Prices
  test('formats a valid number price correctly', () => {
    const expected = '12,99 €'.replace(/\s/g, '\u00A0'); // Normalize spaces
    const result = formatPriceWithCurrency(12.99);

    expect(result).toBe(expected);
  });

  test('formats a valid string number price correctly', () => {
    const expected = '12,99 €'.replace(/\s/g, '\u00A0');
    expect(formatPriceWithCurrency('12.99')).toBe(expected);
  });

  test('formats a large number correctly', () => {
    const expected = '123.456,78 €'.replace(/\s/g, '\u00A0');
    expect(formatPriceWithCurrency(123456.78)).toBe(expected);
  });

  test('formats price in different locales', () => {
    expect(formatPriceWithCurrency(12.99, 'en-US', 'USD')).toBe('$12.99');
    expect(formatPriceWithCurrency(12.99, 'ja-JP', 'JPY')).toBe('￥12.99');
  });

  // 🔴 Invalid Prices (should throw errors)
  test('throws error for non-numeric string', () => {
    expect(() => formatPriceWithCurrency('abc')).toThrow(
      'Invalid price value: abc',
    );
  });

  test('throws error for negative numbers', () => {
    expect(() => formatPriceWithCurrency(-5)).toThrow(
      'Invalid price value: -5',
    );
  });

  test('throws error for empty string', () => {
    expect(() => formatPriceWithCurrency('')).toThrow('Invalid price value: ');
  });

  test('throws error for undefined input', () => {
    expect(() =>
      formatPriceWithCurrency(undefined as unknown as number),
    ).toThrow();
  });
});
