export const parseDate = (value: string = Date.now().toString()) => {
  const date = new Date(Date.parse(value));
  return date.toLocaleDateString("en-CA");
};
