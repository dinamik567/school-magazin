import style from "./style.module.css";
import { Assessment } from "../../types/type";
import { RowCeil } from "./RowCeil";

interface RowOfTableProps {
  daysAmount: number[];
  schoolResult: Assessment[];
  studentName: string;
}

export function TableRow({
  daysAmount,
  schoolResult,
  studentName,
}: RowOfTableProps) {
  return (
    <tr>
      <td rowSpan={2} className={style.ceil}>
        {studentName}
      </td>
      {daysAmount.map((_, index) => (
        <RowCeil key={index} value={schoolResult[0].result} />
      ))}
    </tr>
  );
}
