import style from "./style.module.css";
import { schoolMonth } from "../../../defaultSettings";

export function SelectMonth() {
  return (
    <select
      className={style.selectMonth}
      onChange={(e) => console.log(e.target.value)}
    >
      {schoolMonth.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}
