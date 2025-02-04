export const formatPriceWithCurrency = (
  price: number | string,
  locale: string = 'de-DE',
  currency: string = 'EUR',
) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  if (isNaN(numericPrice) || numericPrice < 0) {
    throw new Error(`Invalid price value: ${price}`);
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice);
};
