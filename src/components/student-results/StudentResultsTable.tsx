import style from "./style.module.css";
import { SchoolClass } from "../../types/type";
import { HeaderRow } from "./HeaderRow";
import { TableRow } from "./TableRow";
import { getDaysArrayInMonth } from "./utils";

interface TableOfStudentOfResultsProps {
  schoolClass: SchoolClass;
}

const currentYear = new Date().getFullYear();

export function StudentResultsTable({
  schoolClass,
}: TableOfStudentOfResultsProps) {
  const daysArray = getDaysArrayInMonth(5, currentYear);

  return (
    <table className={style.table}>
      <HeaderRow daysAmount={daysArray} currentYear={currentYear} />
      {schoolClass.students.map((student) => (
        <TableRow
          key={student.id}
          daysAmount={daysArray}
          studentName={`${student.lastName} ${student.firstName[0]}. ${student.patronymic[0]}.`}
          schoolResult={student.schoolSubjects[0].assessments}
        />
      ))}
    </table>
  );
}
