import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Props) {
  return <FaAngleLeft onClick={onPrevClick} />;
}
