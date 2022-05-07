export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((item: string): number => {
    return parseInt(item);
  }); // ["28", "10", "2018"]

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0] + 1);
};
