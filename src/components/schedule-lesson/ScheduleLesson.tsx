import style from "./style.module.css";
import { SchoolDay } from "../../types/type";
import { colorForThisDayOfTheWeek } from "./utils";

export interface ScheduleLessonProps {
  SchoolDay: SchoolDay;
}

export function ScheduleLesson({ SchoolDay }: ScheduleLessonProps) {
  const modifierClass = style[`${colorForThisDayOfTheWeek(SchoolDay.name)}`];
  return (
    <div className={style.day}>
      <div className={`${style.headerDay} ${modifierClass}`}>
        {SchoolDay.name}
        <div className={style.date}>{SchoolDay.date}</div>
      </div>
      <div className={style.contentDay}>
        {SchoolDay.lessons.map((lesson) => {
          return (
            <div className={style.lesson} key={lesson.id}>
              <div className={style.lessonInner}>
                <span className={style.numberLesson}>{lesson.id}.</span>
                <div className={style.timeLesson}>
                  {`${lesson.startOfTheLesson}-${lesson.endOfTheLessonTime}`}
                </div>
              </div>
              <div className={style.lessonName} title={lesson.nameSubject}>
                {lesson.nameSubject}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
