type Props = {
  itemsCount: number;
  index: number;
  onIndicatorClick: (indicatorIndex: number) => void;
};

export function Indicators({ itemsCount, index, onIndicatorClick }: Props) {
  const indicators = [];
  for (let i = 0; i < itemsCount; i++) {
    indicators.push(
      <button
        key={i}
        onClick={() => onIndicatorClick(i)}
        style={{ backgroundColor: i === index ? 'blue' : 'black' }}>
        {i}
      </button>
    );
  }
  return <div>{indicators}</div>;
}
