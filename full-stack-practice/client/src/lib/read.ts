import { type Product } from './data';

export async function readCatalog(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as Product[];
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as Product;
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}
