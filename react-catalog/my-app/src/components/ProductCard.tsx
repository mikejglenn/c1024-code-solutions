import { type Product, toDollars } from '../lib';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};
export function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/details/${product.productId}`}
      className="block cursor-pointer text-white rounded border border-gray-300 mb-4">
      <div className="flex-auto p-6">
        <div className="h-96 flex items-center">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <h5 className="font-bold mb-3 text-xl">{product.name}</h5>
        <p className="pb-4">{toDollars(product.price)}</p>
        <p>{product.shortDescription}</p>
      </div>
    </Link>
  );
}
