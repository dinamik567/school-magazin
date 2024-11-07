import style from "./style.module.css";
import { SchoolClass } from "../../types/type";
import { HeaderRow } from "./HeaderRow";
import { TableRow } from "./TableRow";
import { daysInMonth } from "./utils";

interface TableOfStudentOfResultsProps {
  schoolClass: SchoolClass;
}

const currentYear = new Date().getFullYear();

export function StudentResultsTable({
  schoolClass,
}: TableOfStudentOfResultsProps) {
  const days = daysInMonth(5, currentYear);
  const daysArray: number[] = [];

  for (let i = 0; i < days; i++) {
    daysArray.push(i + 1);
  }

  return (
    <div className={style.table}>
      <HeaderRow daysArray={daysArray} currentYear={currentYear} />
      {schoolClass.students.map((student) => (
        <TableRow
          key={student.id}
          daysAmount={daysArray}
          studentName={student.firstName}
          schoolResult={student.SchoolSubjects}
        />
      ))}
    </div>
  );
}
