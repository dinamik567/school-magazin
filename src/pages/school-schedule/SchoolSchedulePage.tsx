import style from "./style.module.css";
import { ScheduleLesson } from "../../components/schedule-lesson/ScheduleLesson";
import { SchoolDay } from "../../types/type";
import { NAME_OF_DAY } from "../../defaultSettings";

const SchoolSchedule: SchoolDay[] = [
  {
    id: 1,
    name: NAME_OF_DAY.MONDAY,
    date: "21.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Классный час",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "География",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "Русский язык",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Математика",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "Математика",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Физкультура",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "Литература",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
  {
    id: 2,
    name: NAME_OF_DAY.TUESDAY,
    date: "22.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Русский язык",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "Литература",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "Англ.язык",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "История",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "Математика Математика Математика",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Музыка",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
  {
    id: 3,
    name: NAME_OF_DAY.WEDNESDAY,
    date: "23.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Обществознание",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "ОДНКНР",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "Русский язык",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "История",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "ИЗО",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Математика",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
  {
    id: 4,
    name: NAME_OF_DAY.THURSDAY,
    date: "24.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Русский язык",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "Технология",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "Технология",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Электив",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "Математика",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Англ.язык",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "Россия-мои горизонты",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
  {
    id: 5,
    name: NAME_OF_DAY.FRIDAY,
    date: "25.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Русский язык",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "Литература",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "История",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Русский язык",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "Физкультура",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Биология",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
  {
    id: 6,
    name: NAME_OF_DAY.SATURDAY,
    date: "26.10.2024",
    isSchoolDay: true,
    lessons: [
      {
        id: 1,
        startOfTheLesson: "08.30",
        endOfTheLessonTime: "09.15",
        nameSubject: "Англ.язык",
      },
      {
        id: 2,
        startOfTheLesson: "09.25",
        endOfTheLessonTime: "10.10",
        nameSubject: "Математика",
      },
      {
        id: 3,
        startOfTheLesson: "10.20",
        endOfTheLessonTime: "11.05",
        nameSubject: "Биология",
      },
      {
        id: 4,
        startOfTheLesson: "11.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "История",
      },
      {
        id: 5,
        startOfTheLesson: "12.30",
        endOfTheLessonTime: "13.15",
        nameSubject: "Физкультура",
      },
      {
        id: 6,
        startOfTheLesson: "13.25",
        endOfTheLessonTime: "12.10",
        nameSubject: "Обществознание",
      },
      {
        id: 7,
        startOfTheLesson: "14.20",
        endOfTheLessonTime: "15.05",
        nameSubject: "",
      },
      {
        id: 8,
        startOfTheLesson: "14.30",
        endOfTheLessonTime: "15.15",
        nameSubject: "",
      },
    ],
  },
];

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
