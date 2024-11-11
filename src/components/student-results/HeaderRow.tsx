import style from "./style.module.css";
import { getShortNameOfWeekDay } from "./utils";

interface RowHeaderProps {
  daysAmount: number[];
  currentYear: number;
}

export function HeaderRow({ daysAmount, currentYear }: RowHeaderProps) {
  return (
    <>
      <tr>
        <th rowSpan={2} className={style.ceil}>
          Предметы
        </th>
        {daysAmount.map((_, index) => (
          <th key={index} className={style.ceil}>
            {" "}
            {getShortNameOfWeekDay(currentYear, 5, index)}
          </th>
        ))}
      </tr>
      <tr>
        {daysAmount.map((day, index) => (
          <td key={index} className={style.ceil}>
            {day}
          </td>
        ))}
      </tr>
    </>
  );
}
