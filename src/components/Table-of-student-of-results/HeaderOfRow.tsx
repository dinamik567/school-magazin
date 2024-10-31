import style from "./style.module.css";
import {
  getShortNameOfWeekDay,
  getNumberOfDay,
  getSubArrayActivePage,
} from "./utils";
import { useSelector } from "react-redux";
import {
  selectActivePage,
  selectCountPage,
} from "../../store/school-magazine/school-magazine-selectors";
import { SchoolDayI } from "../../types/type";

interface HeaderOfRowProps {
  schoolDays: SchoolDayI[];
}

export function HeaderOfRow({ schoolDays }: HeaderOfRowProps) {
  const activePage = useSelector(selectActivePage);
  const countPage = useSelector(selectCountPage);

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
