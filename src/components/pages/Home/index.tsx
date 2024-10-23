import style from "./style.module.css";
import { Link } from "react-router-dom";

interface HomePageProps {
  openModal: () => void;
}

export function HomePage({ openModal }: HomePageProps) {
  function hadleClickEnterButton() {
    openModal();
  }
  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.logo}>Электронный дневник</div>
        <div className={style.login} onClick={hadleClickEnterButton}>
          Войти
        </div>
      </div>
      <div className={style.container}>
        <nav className={style.navList}>
          <Link
            className={`${style.listItem} ${style.listItem_calender}`}
            to="schedule"
          >
            <span className={style.navItem}>Расписание</span>
          </Link>
          <Link
            className={`${style.listItem} ${style.listItem_results}`}
            to="school_magazine"
          >
            <span className={style.navItem}>Журнал</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
