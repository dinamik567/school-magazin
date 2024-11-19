import style from "./style.module.css";
import { HeaderRow } from "./HeaderRow";
import { TableRow } from "./TableRow";
import { MonthDataModel } from "./helpModels";
import { useAppSelector } from "../../store/hooks";
import { selectMagazinePage } from "../../store/school-magazine/school-magazine-selectors";

export function StudentResultsTable() {
  const { schoolClasses, activeMonth, activeYear } =
    useAppSelector(selectMagazinePage);

  const daysAmount = new MonthDataModel(activeMonth, activeYear);
  return (
    <table className={style.table}>
      <tbody>
        <HeaderRow daysAmount={daysAmount.monthData} />
        {schoolClasses.students.map((student) => (
          <TableRow
            key={student.id}
            daysAmount={daysAmount.monthData}
            studentName={student.shortName}
            schoolResult={student.getSchoolSubjectByName("Математика")}
          />
        ))}
      </tbody>
    </table>
  );
}
