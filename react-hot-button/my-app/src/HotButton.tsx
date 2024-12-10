type Props = {
  label: string;
  onHotButtonClick: () => void;
  clicks: number;
};

export function HotButton({ label, onHotButtonClick, clicks }: Props) {
  return (
    <>
      <button onClick={onHotButtonClick}>{label}</button>
      <span>{clicks} Clicks</span>
    </>
  );
}
