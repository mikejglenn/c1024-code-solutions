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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '400px',
      }}>
      <div
        style={{
          width: '100%',
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
        <div style={{ display: 'flex', height: '300px', padding: '0 4rem' }}>
          <ImageBoard image={images[index]} />
        </div>
        <Button
          direction="next"
          onButtonClick={() => setIndex((index + 1) % images.length)}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Dots
          count={images.length}
          current={index}
          onDotClick={(i) => setIndex(i)}
        />
      </div>
    </div>
  );
}
