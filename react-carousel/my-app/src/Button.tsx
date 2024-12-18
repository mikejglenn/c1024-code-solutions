import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
  direction: string;
  onClick: () => void;
};

export function Button({ direction, onClick }: Props) {
  const ButtonIcon = direction === 'prev' ? FaChevronLeft : FaChevronRight;
  return <ButtonIcon onClick={onClick} style={{ fontSize: '2rem' }} />;
}
