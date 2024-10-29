import style from "./style.module.css";
import { useEffect, useState } from "react";
import { HeaderSection } from "../../ui/Heder-section";
import { NameUserBlock } from "../../Name-user-block";
import { TableOfStudentOfResults } from "../../Table-of-student-of-results";
import { UserI } from "../../../types/type";
import { subjects } from "../../../mock";
import { SelectMonth } from "../../ui/Select-month";
import { Pagination } from "../../ui/Pagination";

const user: UserI = {
  name: "Владислав",
  surname: "Ирхин",
  patronymic: "Евгеневич",
  role: "student",
};

export function SchoolMagazinePage() {
  const [activePage, setActivePage] = useState(1);
  const [countPage, setCountPage] = useState(1);

  function handleResize() {
    if (window.innerWidth < 501) {
      setCountPage(3);
    } else if (window.innerWidth < 901) {
      setCountPage(2);
    } else {
      setCountPage(0);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <section className={style.magazine_section}>
      <HeaderSection>Журнал</HeaderSection>
      <div className={style.container}>
        <NameUserBlock user={user} />
        <div className={style.control__inner}>
          <SelectMonth />
          {countPage !== 0 && (
            <Pagination
              maxWidth={150}
              countPage={countPage}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </div>
        <TableOfStudentOfResults
          schoolSubject={subjects}
          activePage={activePage}
          countPage={countPage}
        />
      </div>
    </section>
  );
}
