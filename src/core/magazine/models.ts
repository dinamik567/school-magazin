import {
  SchoolClass,
  Student,
  SchoolSubject,
  Assessment,
} from "../../types/type";

export class SchoolClassModel {
  id;
  name;
  students;
  constructor({ id, name, students }: SchoolClass) {
    this.id = id;
    this.name = name;
    this.students = students.map((student) => new StudentModel(student));
  }
}

export class StudentModel {
  id;
  firstName;
  lastName;
  patronymic;
  schoolSubjects;
  constructor({
    id,
    firstName,
    lastName,
    patronymic,
    schoolSubjects,
  }: Student) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.schoolSubjects = schoolSubjects.map(
      (schoolSubject) => new SchoolSubjectModel(schoolSubject)
    );
  }

  get shortName() {
    return `${this.lastName} ${this.firstName[0]}. ${this.patronymic[0]}.`;
  }

  getSchoolSubjectByName(schoolSubjectName: string) {
    return this.schoolSubjects.find(
      (subject) => subject.name === schoolSubjectName
    );
  }
}

export class SchoolSubjectModel {
  id;
  name;
  assessments;
  constructor({ id, name, assessments }: SchoolSubject) {
    this.id = id;
    this.name = name;
    this.assessments = assessments.map(
      (assessment) => new AssessmentModal(assessment)
    );
  }

  getResultOnSelectData(data: string) {
    const result = this.assessments.find(
      (assessment) => assessment.data === data
    );
    return result || null;
  }
}

class AssessmentModal {
  id;
  data;
  result;
  note;

  constructor({ id, data, result, note }: Assessment) {
    this.id = id;
    this.data = data;
    this.result = result;
    this.note = note;
  }
}
