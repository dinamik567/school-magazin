import style from "./style.module.css";
import { HeaderSection } from "../../ui/Heder-section";
import { NameUserBlock } from "../../Name-user-block";
import { UserI } from "../../../types/type";

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
      <NameUserBlock user={user} />
      {/* <div className={style.table}>

      </div> */}
    </section>
  );
}
