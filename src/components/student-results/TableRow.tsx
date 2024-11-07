import style from "./style.module.css";
import { SchoolSubjects } from "../../types/type";
import { RowCeil } from "./RowCeil";

interface RowOfTableProps {
  daysAmount: number[];
  schoolResult: SchoolSubjects[];
  studentName: string;
}

export function TableRow({
  daysAmount,
  schoolResult,
  studentName,
}: RowOfTableProps) {
  console.log(schoolResult);
  return (
    <div className={style.table__row}>
      <div
        className={`${style.table__firstCol} ${style.table__firstCol_border}`}
      >
        {studentName}
      </div>
      {/* <div className={`${style.table__inner}`}>
        {daysAmount.map((day) => (
          <RowCeil key={day} />
        ))}
      </div> */}
      <div
        className={`${style.table__inner} ${style.table__inner_borderTopNone}`}
      >
        {daysAmount.map((day, index) => (
          <div key={index} className={style.table__ceil}>
            <RowCeil />
          </div>
        ))}
      </div>
    </div>
  );
}
