import type { Image } from './App';
import { Button } from './Button';
import { ImageBoard } from './ImageBoard';
import { Dots } from './Dots';
import { useState, useEffect } from 'react';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [index, images.length]);

  return (
    <>
      <div
        style={{
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          direction="prev"
          onButtonClick={() =>
            setIndex((index - 1 + images.length) % images.length)
          }
        />
        <ImageBoard image={images[index]} />
        <Button
          direction="next"
          onButtonClick={() => setIndex((index + 1) % images.length)}
        />
      </div>
      <Dots
        count={images.length}
        current={index}
        onDotClick={(i) => setIndex(i)}
      />
    </>
  );
}
