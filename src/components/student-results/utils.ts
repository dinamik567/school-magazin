import { shortNameOfWeekDay } from "../../defaultSettings";
import { SchoolDay } from "../../types/type";

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
