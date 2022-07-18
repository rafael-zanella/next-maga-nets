export const currencyFormatter = (locales, currency) => new Intl.NumberFormat(locales, {
  style: 'currency',
  currency,
})