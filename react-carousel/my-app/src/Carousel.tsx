import type { Image } from './App';
import { PrevButton } from './PrevButton';
import { ImageBoard } from './ImageBoard';
import { NextButton } from './NextButton';
import { Dots } from './Dots';
import { useState } from 'react';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <PrevButton
        onPrevClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
      />
      <ImageBoard image={images[index]} />
      <NextButton onNextClick={() => setIndex((index + 1) % images.length)} />
      <Dots
        count={images.length}
        current={index}
        onDotClick={(i) => setIndex(i)}
      />
    </>
  );
}
