import style from "./style.module.css";
import { ArrowBack } from "../Arrow-back";

interface HeaderSectionProps {
  children?: React.ReactNode;
}

export function HeaderSection({ children }: HeaderSectionProps) {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <ArrowBack pathTo="/" />
        <div className={style.title}>{children}</div>
      </div>
    </header>
  );
}
