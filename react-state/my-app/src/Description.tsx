import { useState } from 'react';

type Props = {
  descriptions: string[];
};

export function Description({ descriptions }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= descriptions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return <p onClick={handleClick}>{descriptions[index]}</p>;
}
