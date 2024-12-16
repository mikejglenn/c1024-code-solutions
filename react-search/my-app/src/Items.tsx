type Props = {
  filteredItems: string[];
};

export function Items({ filteredItems }: Props) {
  let items;
  if (filteredItems.length > 0) {
    items = filteredItems.map((item, i) => <div key={i}>{item}</div>);
  } else {
    items = <div>No items match the filter.</div>;
  }

  return items;
}
