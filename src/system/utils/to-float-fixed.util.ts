export const toFloatFixed = (value: string | number, decimalFix) => {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  value = value.toFixed(decimalFix);
  return +value;
};
