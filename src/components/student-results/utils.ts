import { shortNameOfWeekDay, monthNames } from "../../defaultSettings";

export function getShortNameOfWeekDay(
  year: number,
  month: number,
  day: number
): string {
  const date = new Date(year, month, day);
  const numDayOfWeek = date.getDay();
  return shortNameOfWeekDay[numDayOfWeek];
}

export function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function getDaysArrayInMonth(month: number, year: number) {
  const days = daysInMonth(month, year);
  const daysArray: number[] = [];

  for (let i = 0; i < days; i++) {
    daysArray.push(i + 1);
  }

  return daysArray;
}

export function getNameOfMoth(numberMonth: number) {
  return monthNames[numberMonth - 1];
}

export function getNumberOfDay(date: string) {
  const [day] = date.split(".");
  return day;
}
