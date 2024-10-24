/* exported getFullNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}
