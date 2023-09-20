export const getDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: '2-digit',
  });
};
