import style from "./style.module.css";
import { RowCeil } from "./RowCeil";
import { getShortNameOfWeekDay } from "./utils";

interface RowHeaderProps {
  daysArray: number[];
  currentYear: number;
}

export function HeaderRow({ daysArray, currentYear }: RowHeaderProps) {
  return (
    <div className={style.table__row}>
      <div
        className={`${style.table__firstCol} ${style.table__inner_borderBottomNone}`}
      >
        Предметы
      </div>
      <div className={style.table__inner}>
        {daysArray.map((day, index) => (
          <div key={index} className={style.table__ceil}>
            <div className={style.row__nameDay}>
              {getShortNameOfWeekDay(currentYear, 5, index)}
            </div>
            <RowCeil value={day} />
          </div>
        ))}
      </div>
    </div>
  );
}
