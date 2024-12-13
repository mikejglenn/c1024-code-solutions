import { Banner } from './Banner';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
    </>
  );
}
