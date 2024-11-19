import { shortNameOfWeekDay, monthNames } from "../../defaultSettings";

export class MonthDataModel {
  numberMonth;
  year;

  constructor(monthName: string, year: number) {
    this.numberMonth = monthNames.indexOf(monthName);
    this.year = year;
  }

  get monthData() {
    const days = this.daysInMonth(this.numberMonth, this.year);
    const array: DataInMonthModel[] = [];
    for (let i = 0; i < days; i++) {
      array.push(new DataInMonthModel(i + 1, this.numberMonth, this.year));
    }
    return array;
  }

  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  get monthName() {
    return monthNames[this.numberMonth - 1];
  }
}

export class DataInMonthModel {
  numberDay;
  numberMonth;
  year;

  constructor(numberDay: number, numberMonth: number, year: number) {
    this.numberDay = numberDay;
    this.numberMonth = numberMonth + 1;
    this.year = year;
  }

  #addZeroToDate(num: number) {
    if (num < 10 && num > 0) {
      return "0" + num;
    }

    return num;
  }

  get data() {
    const data = [
      this.#addZeroToDate(this.numberDay),
      this.#addZeroToDate(this.numberMonth),
      this.#addZeroToDate(this.year),
    ];
    return data.join(".");
  }

  get shortNameOfWeekDay(): string {
    const date = new Date(this.year, this.numberMonth - 1, this.numberDay);
    const numDayOfWeek = date.getDay();
    return shortNameOfWeekDay[numDayOfWeek];
  }
}
