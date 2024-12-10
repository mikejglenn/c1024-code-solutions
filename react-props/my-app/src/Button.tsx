type Props = {
  text: string;
};

export function Button({ text }: Props) {
  return <button>{text}</button>;
}
