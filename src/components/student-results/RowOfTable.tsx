import style from "./style.module.css";
import { SchoolDay, SchoolResult } from "../../types/type";

interface RowOfTableProps {
  schoolDays: SchoolDay[];
  schoolResult: SchoolResult[];
  subjectName: string;
}

export function TableRow({
  schoolDays,
  schoolResult,
  subjectName,
}: RowOfTableProps) {
  return (
    <div className={style.table__row}>
      <div
        className={`${style.table__firstCol} ${style.table__firstCol_border}`}
      >
        {subjectName}
      </div>
      <div className={`${style.table__inner} ${style.table__inner_border}`}>
        {schoolDays.map((day) => {
          const grade = schoolResult.find((item) => item.date == day.date);
          return (
            <div key={day.date} className={style.table__ceil}>
              <div className={style.ceil__numberDay}>{grade?.result}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
