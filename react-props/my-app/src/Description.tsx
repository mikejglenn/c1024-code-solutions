type Props = {
  description: string;
};

export function Description({ description }: Props) {
  return <p>{description}</p>;
}
