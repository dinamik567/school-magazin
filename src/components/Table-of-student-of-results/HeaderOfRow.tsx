import style from "./style.module.css";
import { getShortNameOfWeekDay, getNumberOfDay } from "./utils";
import { SchoolDayI } from "../../types/type";

interface HeaderOfRowProps {
  schoolDays: SchoolDayI[];
  activePage: number;
  countPage: number;
}

export function HeaderOfRow({
  schoolDays,
  activePage,
  countPage,
}: HeaderOfRowProps) {
  function getSubArrayActivePage(
    schoolDays: SchoolDayI[],
    activePage: number,
    countPage: number
  ) {
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
  return (
    <div className={style.table__row}>
      <div className={`${style.table__firstCol}`}>Предметы</div>
      <div className={style.table__inner}>
        {getSubArrayActivePage(schoolDays, activePage, countPage).map((day) => {
          return (
            <div key={day.id} className={style.table__ceil}>
              <div className={style.row__nameDay}>
                {getShortNameOfWeekDay(day.date)}
              </div>
              <div
                className={`${style.ceil__numberDay} ${style.ceil__numberDay_border}`}
              >
                {getNumberOfDay(day.date)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
