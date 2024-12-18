import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};

export function Dots({ count, current, onSelect }: Props) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    const DotIcon = i === current ? FaCircle : FaRegCircle;
    dots.push(
      <DotIcon
        key={i}
        onClick={() => onSelect(i)}
        style={{ padding: '0 5px' }}
      />
    );
  }
  return <>{dots}</>;
}
