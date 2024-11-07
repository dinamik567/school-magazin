import style from "./style.module.css";
interface RowCeilProps {
  value?: number;
}

export function RowCeil({ value }: RowCeilProps) {
  return <div className={`${style.ceil} ${style.ceil_border}`}>{value}</div>;
}
