type Props = {
  onNextClick: () => void;
};

export function NextButton({ onNextClick }: Props) {
  return <button onClick={onNextClick}>Next</button>;
}
