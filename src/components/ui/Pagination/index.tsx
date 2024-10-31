import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { RootState } from "../../../store/store";
import { chanageActivePage } from "../../../store/school-magazine/school-magazine-slice";

interface PaginationProps {
  maxWidth: number;
  countPage: number;
}

export function Pagination({ maxWidth, countPage }: PaginationProps) {
  const activePage = useSelector(
    (state: RootState) => state.shoolMagazineState.activePage
  );
  const numbersPage = Array.from({ length: countPage }, (_, i) => i + 1);
  const dispatch = useDispatch();

  function handleClickSetPage(state: number) {
    dispatch(chanageActivePage(state));
  }

  return (
    <div className={style.container} style={{ maxWidth: `${maxWidth}px` }}>
      {numbersPage.map((page, index) => {
        return (
          <div
            key={index}
            className={`${style.dots} ${
              activePage === page ? style.activePage : ""
            }`}
            onClick={() => handleClickSetPage(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
