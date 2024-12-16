type Props = {
  value: string;
  onSearchChange: (searchInput: string) => void;
};

export function SearchBar({ value, onSearchChange }: Props) {
  return (
    <div
      style={{
        background: `url(/search-solid.svg) no-repeat`,
        backgroundSize: '11px',
        backgroundPosition: '5px 8px',
      }}>
      <input
        style={{
          width: '50%',
          background: 'transparent',
          paddingLeft: '1.1rem',
        }}
        value={value}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
