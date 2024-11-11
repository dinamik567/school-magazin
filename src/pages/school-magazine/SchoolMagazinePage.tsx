import style from "./style.module.css";
import { useCallback, useEffect } from "react";
import { HeaderSection } from "../../components/ui/header-section/HeaderSection";
import { InfoAboutStudent } from "../../components/info-about-student/InfoAboutStudent";
import { StudentResultsTable } from "../../components/student-results/StudentResultsTable";
import { User } from "../../types/type";
import { schoolClasses } from "../../../mock";
import { SelectMonth } from "../../components/ui/month-select";
import { useAppDispatch } from "../../store/hooks";
import { changeActivePage } from "../../store/school-magazine/school-magazine-slice";
import { SchoolClassModal } from "../../core/magazine/modal";

const user: User = {
  name: "Владислав",
  surname: "Ирхин",
  patronymic: "Евгеневич",
  role: "student",
};

export function SchoolMagazinePage() {
  const dispatch = useAppDispatch();
  console.log(schoolClasses[0]);
  const schoolClass = new SchoolClassModal(schoolClasses[0]);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 500) {
      dispatch(changeActivePage(3));
    } else if (window.innerWidth < 901) {
      dispatch(changeActivePage(2));
    } else {
      dispatch(changeActivePage(0));
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
        <InfoAboutStudent user={user} />
        <div className={style.control__inner}>
          <SelectMonth />
        </div>
        <StudentResultsTable schoolClass={schoolClass} />
      </div>
    </section>
  );
}
