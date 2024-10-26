import { ROLES } from "../defaultSettings";

export interface Lesson {
  id: number;
  nameSubject: string;
  startOfTheLesson: string;
  endOfTheLessonTime: string;
}

export interface SchoolDay {
  id: number;
  name: string;
  date: string;
  lessons: Lesson[];
}

export interface UserI {
  name: string;
  surname: string;
  patronymic: string;
  role: keyof typeof ROLES;
}
