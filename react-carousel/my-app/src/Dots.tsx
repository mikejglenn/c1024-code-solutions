import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  count: number;
  current: number;
  onDotClick: (index: number) => void;
};

export function Dots({ count, current, onDotClick }: Props) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(
      i === current ? (
        <FaCircle key={i} onClick={() => onDotClick(i)} />
      ) : (
        <FaRegCircle key={i} onClick={() => onDotClick(i)} />
      )
    );
  }
  return <div>{dots}</div>;
}
