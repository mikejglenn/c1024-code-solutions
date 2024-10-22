interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Mike',
  lastName: 'Glenn',
  age: 38,
};

const vehicle: Vehicle = {
  make: 'Volvo',
  model: 'XC90',
  year: 2025,
};

const pet: Pet = {
  name: 'Spuds',
  kind: 'iguana',
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'DevOps Engineer';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
