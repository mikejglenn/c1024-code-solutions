import { Banner } from './Banner';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Banner item={items[index]} />
      <PrevButton
        onPrevClick={() =>
          setIndex((index) => (index - 1 + items.length) % items.length)
        }
      />
      <Indicators
        itemsCount={items.length}
        index={index}
        onIndicatorClick={(indicatorIndex) => setIndex(indicatorIndex)}
      />
      <NextButton
        onNextClick={() => setIndex((index) => (index + 1) % items.length)}
      />
    </>
  );
}
