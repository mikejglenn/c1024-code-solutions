type Props = {
  itemsCount: number;
  index: number;
};

export function Indicators({ itemsCount, index }: Props) {
  const indicators = [];
  for (let i = 0; i < itemsCount; i++) {
    indicators.push(
      <button style={{ backgroundColor: i === index ? 'blue' : 'black' }}>
        {i}
      </button>
    );
  }
  return <div>{indicators}</div>;
}
