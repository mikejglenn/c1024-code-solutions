/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const nameArr = [];
  for (const key in students) {
    nameArr.push(students[key].name);
  }
  return nameArr;
}
