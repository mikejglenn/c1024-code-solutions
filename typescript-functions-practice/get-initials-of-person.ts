/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  return person.firstName[0] + person.lastName[0];
}
