import style from "./style.module.css";
import { ROLES } from "../../defaultSettings";
import { User } from "../../types/type";

interface InfoAboutStudentProps {
  user: User;
}

export function InfoAboutStudent({ user }: InfoAboutStudentProps) {
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
