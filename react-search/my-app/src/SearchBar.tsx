type Props = {
  onSearchChange: (searchInput: string) => void;
};

export function SearchBar({ onSearchChange }: Props) {
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
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
