import style from "./style.module.css";
import { SchoolSubjectI, SchoolResultI } from "../../types/type";
import { HeaderOfRow } from "./HeaderOfRow";
import { RowOfTable } from "./RowOfTable";
import { SchoolSchedule } from "../../mock";

interface TableOfStudentOfResultsProps {
  schoolSubject: SchoolSubjectI[];
  activePage: number;
  countPage: number;
}

export function TableOfStudentOfResults({
  schoolSubject,
  activePage,
  countPage,
}: TableOfStudentOfResultsProps) {
  return (
    <div className={style.table}>
      <HeaderOfRow
        schoolDays={SchoolSchedule}
        activePage={activePage}
        countPage={countPage}
      />
      {schoolSubject.map((schoolDay) => {
        return (
          <RowOfTable
            key={schoolDay.id}
            schoolDays={SchoolSchedule}
            subjectName={schoolDay.name}
            schoolResult={schoolDay.schoolResults}
          />
        );
      })}
    </div>
  );
}
