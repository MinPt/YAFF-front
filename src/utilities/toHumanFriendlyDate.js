export default function toHumanFriendlyDate(date) {
  if (date === null) {
    return null;
  }

  const inputDate = date instanceof Date ? date : new Date(date);
  const currentDate = new Date();

  const timespanInMinutes = Math.floor((currentDate - inputDate) / 60000);

  if (timespanInMinutes < 1) {
    return "Recently";
  }

  if (timespanInMinutes < 60) {
    return `${timespanInMinutes} minute(s) ago`;
  }

  if (timespanInMinutes < 1440) {
    const hoursPassed = Math.floor(timespanInMinutes / 60);
    return `${hoursPassed} hour(s) ago`;
  }

  return inputDate.toDateString();
}
