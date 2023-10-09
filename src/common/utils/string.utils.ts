export function formatMoney(
  amount: number,
  currency?: string,
  locales?: string,
) {
  return new Intl.NumberFormat(locales || 'vi-VN', {
    style: 'currency',
    currency: currency || 'VND',
  }).format(amount);
}
