type Props = {
  onPrevClick: () => void;
};

export function PrevButton({ onPrevClick }: Props) {
  return <button onClick={onPrevClick}>Prev</button>;
}
