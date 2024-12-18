import type { Image } from './App';

type Props = {
  image: Image;
};

export function ImageBoard({ image }: Props) {
  return <img src={image.src} alt={image.alt} style={{ height: '500px' }} />;
}
