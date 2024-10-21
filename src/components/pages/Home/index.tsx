import style from "./style.module.css";

export function HomePage() {
  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.logo}>Электронный дневник</div>
        <div className={style.login}>Войти</div>
      </div>
      <div className={style.container}>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={`${style.listItem} ${style.listItem_calender}`}>
              <a className={style.navItem} href="#">
                Расписание
              </a>
            </li>
            <li className={`${style.listItem} ${style.listItem_results}`}>
              <a className={style.navItem} href="#">
                Журнал
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
