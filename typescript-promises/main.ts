import { takeAChance } from './take-a-chance.js';

takeAChance('Mike')
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
