import style from "./style.module.css";
import { RowCeil } from "./RowCeil";
import { DataInMonthModel } from "./helpModels";
import { SchoolSubjectModel } from "../../core/magazine/models";

interface RowOfTableProps {
  daysAmount: DataInMonthModel[];
  schoolResult: SchoolSubjectModel | undefined;
  studentName: string;
}

export function TableRow({
  daysAmount,
  schoolResult,
  studentName,
}: RowOfTableProps) {
  return (
    <tr>
      <th className={`${style.ceil} ${style.ceil_student}`}>{studentName}</th>
      {daysAmount.map((day, index) => (
        <RowCeil
          key={index}
          value={schoolResult?.getResultOnSelectData(day.data)?.result}
        />
      ))}
    </tr>
  );
}
