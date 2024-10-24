/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
interface Person {
  name: string;
  age: number;
}

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isUnderFive(4);:', isUnderFive(4));
console.log('value of isUnderFive(10);:', isUnderFive(10));
console.log('value of isUnderFive(5);:', isUnderFive(5));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isEven(4);:', isEven(4));
console.log('value of isEven(10);:', isEven(10));
console.log('value of isEven(5);:', isEven(5));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log("value of startsWithJ('JavaScript');:", startsWithJ('JavaScript'));
console.log("value of startsWithJ('PHP');:", startsWithJ('PHP'));
console.log("value of startsWithJ('HTML');:", startsWithJ('HTML'));
console.log("value of startsWithJ('Java');:", startsWithJ('Java'));
console.log("value of startsWithJ('Kotlin');:", startsWithJ('Kotlin'));
console.log("value of startsWithJ('C#');:", startsWithJ('C#'));

const bart: Person = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isOldEnoughToDrink(bart);:', isOldEnoughToDrink(bart));

const homer: Person = {
  name: 'Homer Jay Simpson',
  age: 39,
};

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('value of isOldEnoughToDrive(homer);:', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  // return !person;
  return false;
}

console.log(
  'value of isOldEnoughToDrinkAndDrive(homer);:',
  isOldEnoughToDrinkAndDrive(homer)
);

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH < 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('value of categorizeAcidity(-1);:', categorizeAcidity(-1));
console.log(
  'value of categorizeAcidity(14.0000001);:',
  categorizeAcidity(14.0000001)
);
console.log('value of categorizeAcidity(7);:', categorizeAcidity(7));
console.log('value of categorizeAcidity(2);:', categorizeAcidity(2));
console.log('value of categorizeAcidity(9);:', categorizeAcidity(9));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log(
  "value of introduceWarnerBro('yakko');:",
  introduceWarnerBro('yakko')
);
console.log(
  "value of introduceWarnerBro('wakko');;:",
  introduceWarnerBro('wakko')
);
console.log("value of introduceWarnerBro('dot');:", introduceWarnerBro('dot'));
console.log(
  "value of introduceWarnerBro('cody');:",
  introduceWarnerBro('cody')
);
console.log(
  "value of introduceWarnerBro('minerva');:",
  introduceWarnerBro('minerva')
);

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Barbarian';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'Les Miserables';
    case 'sci-fi':
      return 'Dune';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log("value of recommendMovie('action');:", recommendMovie('action'));
console.log("value of recommendMovie('comedy');:", recommendMovie('comedy'));
console.log("value of recommendMovie('random');:", recommendMovie('random'));
