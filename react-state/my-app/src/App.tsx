import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/nebula.jpg', '/astronaut.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'Amazing Nebula',
  'Astronaut in Planet World',
];
const descriptions = [
  `The starry sky is majestic but there are clouds obscuring the view.`,
  `A striking nebula with brilliant colors from the base elements.`,
  `This astronaut has to choose which planet they want to visit first.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
