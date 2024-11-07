import style from "./style.module.css";
import { ScheduleLesson } from "../../components/schedule-lesson/ScheduleLesson";
import { SchoolSchedule } from "../../../mock";

export function SchoolSchedulePage() {
  return (
    <div className={style.schedule}>
      <h2 className={style.title}>Расписание уроков</h2>

      <div className={style.container}>
        <div className={style.studetWrapper}>
          <div className={style.studentSchool}>Школа: №7</div>
          <div className={style.studentClass}>Класс: 6A</div>
        </div>

        <div className={style.table}>
          {SchoolSchedule.map((day, index) => (
            <ScheduleLesson SchoolDay={SchoolSchedule[index]} key={day.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
