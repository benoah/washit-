export default function getEndTime(startTime, startDate, washingLength) {
  
 const endTime = new Date(startDate + "T" + startTime);
  endTime.setHours(endTime.getHours() + 2);
  endTime.setMinutes(endTime.getMinutes() + washingLength);
  const endTimeString = endTime.toISOString();
  let time = endTimeString.split("T")[1];
  let splittedTime = time.split(":");
  let hour = splittedTime[0];
  let minutes = splittedTime[1];
  let newEndTime = hour + ":" + minutes;
  return newEndTime;
}
