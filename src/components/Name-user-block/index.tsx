import style from "./style.module.css";
import { ROLES } from "../../defaultSettings";
import { UserI } from "../../types/type";

interface NameUserBlockProps {
  user: UserI;
}

export function NameUserBlock({ user }: NameUserBlockProps) {
  const roleUser = ROLES[user.role];

  return (
    <div className={style.user_block}>
      <div className={style.user_name}>
        {roleUser}: {user.name} {user.surname}
      </div>
      <div className={style.studentClass}>Класс: 5В</div>
    </div>
  );
}
