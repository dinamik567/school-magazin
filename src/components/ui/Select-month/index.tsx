import style from "./style.module.css";
import { schoolMonth } from "../../../defaultSettings";
import { useAppDispatch } from "../../../store/hooks";
import { chanageActiveMonth } from "../../../store/school-magazine/school-magazine-slice";

export function SelectMonth() {
  const dispatch = useAppDispatch();

  function handleChangeSelect(e: React.FormEvent<HTMLSelectElement>) {
    dispatch(chanageActiveMonth(e.currentTarget.value));
  }

  return (
    <select className={style.selectMonth} onChange={handleChangeSelect}>
      {schoolMonth.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}
