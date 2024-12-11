import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';
import { useState } from 'react';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [index, setIndex] = useState(0);

  function handleButtonClick() {
    if (index >= srcs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <Header text="React Image Bank" />
      <Image src={srcs[index]} />
      <Caption caption={captions[index]} />
      <Description text={descriptions[index]} />
      <Button onButtonClick={handleButtonClick} label="Click for Next Image" />
    </>
  );
}
