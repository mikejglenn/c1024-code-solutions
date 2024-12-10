import './Image.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};

export function Image({ srcs }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= srcs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={handleClick}
          className="image-fill"
          src={srcs[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
