import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Props = {
  direction: string;
  onButtonClick: () => void;
};

export function Button({ direction, onButtonClick }: Props) {
  const ButtonIcon = direction === 'prev' ? FaAngleLeft : FaAngleRight;
  return <ButtonIcon onClick={onButtonClick} style={{ fontSize: '3rem' }} />;
}
