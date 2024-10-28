import style from "./style.module.css";
import { getShortNameOfWeekDay, getNumberOfDay } from "./utils";
import { SchoolDayI } from "../../types/type";

interface HeaderOfRowProps {
  schoolDays: SchoolDayI[];
}

export function HeaderOfRow({ schoolDays }: HeaderOfRowProps) {
  return (
    <div className={style.table__row}>
      <div className={`${style.table__firstCol}`}>Предметы</div>
      <div className={style.table__inner}>
        {schoolDays.map((day) => (
          <div className={style.table__ceil}>
            <div className={style.row__nameDay}>
              {getShortNameOfWeekDay(day.date)}
            </div>
            <div
              className={`${style.ceil__numberDay} ${style.ceil__numberDay_border}`}
            >
              {getNumberOfDay(day.date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
