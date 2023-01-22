import { Price } from '../models/price.model';

export const generateFakePrice = (numericString: string): Price => {
  /**
   * START
   * based on created_date info from opensea api
   */
  let buildNumber = numericString.split('+');
  buildNumber = buildNumber[0].split('.');
  numericString = buildNumber[0];
  /**
   * based on created_date info from opensea api
   * END
   */
  const randonizer = Math.floor(Math.random() * (6 - 2) + 2);
  numericString = parseInt(numericString).toFixed(randonizer);
  const value = parseFloat(numericString);
  const label = getPriceLabel(value);
  return {
    label,
    value,
  };
};

export const getPriceLabel = (
  price: number,
  currencyLocale = 'pt-BR',
  currencyStyle = 'currency',
  currencySymbol = 'BRL',
): string => {
  const formatter = new Intl.NumberFormat(currencyLocale, {
    style: currencyStyle,
    currency: currencySymbol,
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
};
