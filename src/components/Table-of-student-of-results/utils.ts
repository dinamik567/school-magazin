import { shortNameOfWeekDay } from "../../defaultSettings";

export function getShortNameOfWeekDay(date: string): string {
  const [day, month, year] = date.split(".");
  const objDate = new Date(+year, +month - 1, +day);
  const numDayOfWeek = objDate.getDay();
  return shortNameOfWeekDay[numDayOfWeek];
}

export function getNumberOfDay(date: string) {
  const [day] = date.split(".");
  return day;
}
