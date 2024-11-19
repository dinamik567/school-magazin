import style from "./style.module.css";
import { HeaderSection } from "../../components/ui/header-section/HeaderSection";
import { InfoAboutStudent } from "../../components/info-about-student/InfoAboutStudent";
import { StudentResultsTable } from "../../components/student-results/StudentResultsTable";
import { User } from "../../types/type";
import { SelectMonth } from "../../components/ui/month-select";

const user: User = {
  name: "Владислав",
  surname: "Ирхин",
  patronymic: "Евгеневич",
  role: "student",
};

export function SchoolMagazinePage() {
  return (
    <section className={style.magazine_section}>
      <HeaderSection>Журнал</HeaderSection>
      <div className={style.container}>
        <InfoAboutStudent user={user} />
        <div className={style.control__inner}>
          <SelectMonth />
        </div>
        <StudentResultsTable />
      </div>
    </section>
  );
}
