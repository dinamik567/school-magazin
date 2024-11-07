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

export interface SchoolClass {
  name: string;
  students: Student[];
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  SchoolSubjects: SchoolSubjects[];
}

interface SchoolSubjects {
  id: number;
  name: string;
  assessments: Assessment[];
}

export interface Assessment {
  id: number;
  data: string;
  result: number;
  note?: string;
}
