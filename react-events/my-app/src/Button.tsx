type Props = {
  label: string;
  onButtonClick: () => void;
};
export function Button({ label, onButtonClick }: Props) {
  return <button onClick={onButtonClick}>{label}</button>;
}
