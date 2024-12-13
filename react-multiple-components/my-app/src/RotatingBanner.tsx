import { Banner } from './Banner';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
// import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // const [index, setIndex] = useState(0);
  const index = 0;
  return (
    <>
      <Banner item={items[index]} />
      <PrevButton />
      <Indicators itemsCount={items.length} index={index} />
      <NextButton />
    </>
  );
}
