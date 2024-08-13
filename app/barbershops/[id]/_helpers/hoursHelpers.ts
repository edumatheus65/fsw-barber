import { addMinutes, setHours, setMinutes, format, isBefore } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
  const startTime = setMinutes(setHours(date, 9), 0);
  const endTime = setMinutes(setHours(date, 21), 0);
  const interval = 45;
  const timeList: string[] = [];

  let currentTime = startTime;
  const now = new Date();

  while (currentTime <= endTime) {
    if (!isBefore(currentTime, now)) {
      timeList.push(format(currentTime, "HH:mm"));
    }
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
}
