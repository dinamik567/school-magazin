import style from "./style.module.css";
import { SchoolSubjectI } from "../../types/type";
import { HeaderOfRow } from "./HeaderOfRow";
import { RowOfTable } from "./RowOfTable";
import { SchoolSchedule } from "../../mock";

interface TableOfStudentOfResultsProps {
  schoolSubject: SchoolSubjectI[];
}

// console.log("длинна экрана", window.innerWidth);

export function TableOfStudentOfResults({
  schoolSubject,
}: TableOfStudentOfResultsProps) {
  console.log(schoolSubject);
  return (
    <div className={style.table}>
      <HeaderOfRow schoolDays={SchoolSchedule} />
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
