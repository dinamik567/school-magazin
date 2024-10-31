import style from "./style.module.css";
import { useCallback, useEffect } from "react";
import { HeaderSection } from "../../ui/Heder-section";
import { NameUserBlock } from "../../Name-user-block";
import { TableOfStudentOfResults } from "../../Table-of-student-of-results";
import { UserI } from "../../../types/type";
import { subjects } from "../../../mock";
import { SelectMonth } from "../../ui/Select-month";
import { Pagination } from "../../ui/Pagination";
import { useSelector } from "react-redux";
import { selectCountPage } from "../../../store/school-magazine/school-magazine-selectors";
import { useAppDispatch } from "../../../store/hooks";
import { chanageCountPage } from "../../../store/school-magazine/school-magazine-slice";

const user: UserI = {
  name: "Владислав",
  surname: "Ирхин",
  patronymic: "Евгеневич",
  role: "student",
};

export function SchoolMagazinePage() {
  const countPage = useSelector(selectCountPage);
  const dispatch = useAppDispatch();

  const handleResize = useCallback(() => {
    if (window.innerWidth < 500) {
      dispatch(chanageCountPage(3));
    } else if (window.innerWidth < 901) {
      dispatch(chanageCountPage(2));
    } else {
      dispatch(chanageCountPage(0));
    }
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <section className={style.magazine_section}>
      <HeaderSection>Журнал</HeaderSection>
      <div className={style.container}>
        <NameUserBlock user={user} />
        <div className={style.control__inner}>
          <SelectMonth />
          {countPage !== 0 && (
            <Pagination maxWidth={150} countPage={countPage} />
          )}
        </div>
        <TableOfStudentOfResults schoolSubject={subjects} />
      </div>
    </section>
  );
}
