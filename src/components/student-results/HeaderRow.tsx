import style from "./style.module.css";
import { DataInMonthModel } from "./helpModels";

interface RowHeaderProps {
  daysAmount: DataInMonthModel[];
}

export function HeaderRow({ daysAmount }: RowHeaderProps) {
  return (
    <>
      <tr>
        <th rowSpan={2} className={style.ceil}>
          Предметы
        </th>
        {daysAmount.map((data, index) => (
          <th key={index} className={style.ceil}>
            {data.shortNameOfWeekDay}
          </th>
        ))}
      </tr>
      <tr>
        {daysAmount.map((data, index) => (
          <td key={index} className={style.ceil}>
            {data.numberDay}
          </td>
        ))}
      </tr>
    </>
  );
}
