type Props = {
  count: number;
};

export function Indicators({ count }: Props) {
  const indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(<button>{i}</button>);
  }
  return <div>{indicators}</div>;
}
