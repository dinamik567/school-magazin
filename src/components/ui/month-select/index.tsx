import style from "./style.module.css";
import { schoolMonth } from "../../../defaultSettings";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { changeActiveMonth } from "../../../store/school-magazine/school-magazine-slice";
import { selectActiveMonth } from "../../../store/school-magazine/school-magazine-selectors";

export function SelectMonth() {
  const activeMonth = useAppSelector(selectActiveMonth);

  const dispatch = useAppDispatch();

  function handleChangeSelect(e: React.FormEvent<HTMLSelectElement>) {
    dispatch(changeActiveMonth(e.currentTarget.value));
  }

  return (
    <select className={style.selectMonth} onChange={handleChangeSelect}>
      {schoolMonth.map((month) => (
        <option
          key={month}
          value={month}
          defaultValue={activeMonth === month ? activeMonth : ""}
        >

          {month}
        </option>
      ))}
    </select>
  );
}
