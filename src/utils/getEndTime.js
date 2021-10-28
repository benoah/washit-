export default function getEndTime(startTime, startDate, washingLength) {
  const endTime = new Date(startDate + "T" + startTime);

  endTime.setHours(endTime.getHours() + 2);

  endTime.setMinutes(endTime.getMinutes() + washingLength);

  const endTimeString = endTime.toISOString();

  const time = endTimeString.split("T")[1];

  const splittedTime = time.split(":");

  const hour = splittedTime[0];

  const minutes = splittedTime[1];

  const newEndTime = hour + ":" + minutes;

  return newEndTime;
}
