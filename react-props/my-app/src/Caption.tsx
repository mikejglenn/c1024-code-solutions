type Props = {
  caption: string;
};

export function Caption({ caption }: Props) {
  return <h3>{caption}</h3>;
}
