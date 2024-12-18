import './App.css';
import { Carousel } from './Carousel';

export type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: '/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
