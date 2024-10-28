import style from "./style.module.css";
import { HeaderSection } from "../../ui/Heder-section";
import { NameUserBlock } from "../../Name-user-block";
import { TableOfStudentOfResults } from "../../Table-of-student-of-results";
import { UserI } from "../../../types/type";
import { subjects } from "../../../mock";

const user: UserI = {
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
        <NameUserBlock user={user} />
        <TableOfStudentOfResults schoolSubject={subjects} />
      </div>
    </section>
  );
}
