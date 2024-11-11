import style from "./style.module.css";
interface RowCeilProps {
  value?: number | null;
}

export function RowCeil({ value }: RowCeilProps) {
  return <td className={`${style.ceil} ${style.ceil_assessments}`}>{value}</td>;
}
