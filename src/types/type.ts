import { ROLES } from "../defaultSettings";

export interface LessonI {
  id: number;
  nameSubject: string;
  startOfTheLesson: string;
  endOfTheLessonTime: string;
}

export interface SchoolDay {
  id: number;
  name: string;
  date: string;
  isSchoolDay: boolean;
  lessons: LessonI[];
}

export interface User {
  name: string;
  surname: string;
  patronymic: string;
  role: keyof typeof ROLES;
}

export interface SchoolResult {
  date: string;
  result: string;
}

export interface SchoolSubject {
  id: number;
  name: string;
  schoolResults: SchoolResult[];
}
