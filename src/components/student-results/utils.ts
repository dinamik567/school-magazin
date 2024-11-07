import { shortNameOfWeekDay, monthNames } from "../../defaultSettings";
import { SchoolDay } from "../../types/type";

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

export function getNameOfMoth(numberMonth: number) {
  return monthNames[numberMonth - 1];
}

export function getNumberOfDay(date: string) {
  const [day] = date.split(".");
  return day;
}

export function getSubArrayActivePage(
  schoolDays: SchoolDay[],
  activePage: number,
  countPage: number
) {
  if (activePage === 0) {
    return schoolDays;
  }

  if (countPage === 0) {
    return schoolDays;
  }

  const amountElem = Math.floor(schoolDays.length / countPage);
  const prevArr = [...schoolDays];
  const newArr = [];

  for (let i = 0; i < countPage; i++) {
    if (prevArr.length === 0) {
      break;
    }
    if (prevArr.length < amountElem) {
      newArr.push(prevArr.splice(0));
    } else {
      newArr.push(prevArr.splice(0, amountElem));
    }
  }

  return newArr[activePage - 1];
}
