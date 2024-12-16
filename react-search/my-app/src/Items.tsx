type Props = {
  filteredItems: string[];
};

export function Items({ filteredItems }: Props) {
  return filteredItems.length > 0 ? (
    filteredItems.map((item, i) => <div key={i}>{item}</div>)
  ) : (
    <div>No items match the filter.</div>
  );
}
