import { ROLES } from "../defaultSettings";

export interface LessonI {
  id: number;
  nameSubject: string;
  startOfTheLesson: string;
  endOfTheLessonTime: string;
}

export interface SchoolDayI {
  id: number;
  name: string;
  date: string;
  isSchoolDay: boolean;
  lessons: LessonI[];
}

export interface UserI {
  name: string;
  surname: string;
  patronymic: string;
  role: keyof typeof ROLES;
}

export interface SchoolResultI {
  date: string;
  result: string;
}

export interface SchoolSubjectI {
  id: number;
  name: string;
  schoolResults: SchoolResultI[];
}
