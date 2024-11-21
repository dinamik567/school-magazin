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
  isSchoolDay: boolean;

  lessons: Lesson[];

export interface User {
  name: string;
  surname: string;
  patronymic: string;
  role: keyof typeof ROLES;
}


export interface SchoolClass {
  id: number;
  name: string;
  students: Student[];
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  schoolSubjects: SchoolSubject[];
}

export interface SchoolSubject {
  id: number;
  name: string;
  assessments: Assessment[];
}

export interface Assessment {
  id: number;
  data: string;
  result: number | null;
  note: string | null;
}
