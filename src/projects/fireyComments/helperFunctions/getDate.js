export function timestampToDateString(timestampObject) {
  const date = new Date(
    timestampObject.seconds * 1000 + timestampObject.nanoseconds / 1000000
  );

  const now = new Date();
  const elapsedMilliseconds = now - date;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedMonths = Math.floor(elapsedDays / 30);
  const elapsedYears = Math.floor(elapsedDays / 365);

  if (elapsedYears > 0) {
    return `${elapsedYears} ${elapsedYears === 1 ? 'year' : 'years'} ago`;
  } else if (elapsedMonths > 0) {
    return `${elapsedMonths} ${elapsedMonths === 1 ? 'month' : 'months'} ago`;
  } else if (elapsedDays > 0) {
    return `${elapsedDays} ${elapsedDays === 1 ? 'day' : 'days'} ago`;
  } else if (elapsedHours > 0) {
    return `${elapsedHours} ${elapsedHours === 1 ? 'hour' : 'hours'} ago`;
  } else if (elapsedMinutes > 0) {
    return `${elapsedMinutes} ${elapsedMinutes === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return `${elapsedSeconds} ${elapsedSeconds === 1 ? 'second' : 'seconds'} ago`;
  }
}
