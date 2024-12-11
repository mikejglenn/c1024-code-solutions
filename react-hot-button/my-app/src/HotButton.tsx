type Props = {
  onHotButtonClick: () => void;
  classBgColor: string;
  clicks: number;
};

export function HotButton({ onHotButtonClick, classBgColor, clicks }: Props) {
  return (
    <>
      <button onClick={onHotButtonClick} className={classBgColor}>
        Hot Button
      </button>
      <div>{clicks} Clicks</div>
    </>
  );
}
