import style from "./style.module.css";
import { SchoolSubject } from "../../types/type";
import { RowHeader } from "./RowHeader";
import { TableRow } from "./RowOfTable";
import { SchoolSchedule } from "../../../mock";

interface TableOfStudentOfResultsProps {
  schoolSubject: SchoolSubject[];
}

export function StudentResultsTable({
  schoolSubject,
}: TableOfStudentOfResultsProps) {
  return (
    <div className={style.table}>
      <RowHeader schoolDays={SchoolSchedule} />
      {schoolSubject.map((schoolDay) => {
        return (
          <TableRow
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
