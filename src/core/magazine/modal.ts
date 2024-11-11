import {
  SchoolClass,
  Student,
  SchoolSubject,
  Assessment,
} from "../../types/type";

export class SchoolClassModal {
  id;
  name;
  students;
  constructor({ id, name, students }: SchoolClass) {
    this.id = id;
    this.name = name;
    this.students = students.map((student) => new StudentModal(student));
  }
}

export class StudentModal {
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
      (schoolSubject) => new SchoolSubjectModal(schoolSubject)
    );
  }
}

class SchoolSubjectModal {
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

  get Results() {
    return this.result;
  }
}
