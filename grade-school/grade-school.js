//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// let roster;

export class GradeSchool {
  constructor(){
    this._roster = {};
  }
  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(student, grade) {
    this._roster[grade] ? this._roster[grade].push(student) : this._roster[grade] = [student];
    return this._roster[grade].sort();
  }

  grade(grade) {
    return JSON.parse(JSON.stringify(this._roster[grade] || []));
  }
}
