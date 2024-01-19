import { Product, productsAPI } from '..';

interface GetProductsOpt {
  filterKey?: string;
}

const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getProducts = async ({
  filterKey,
}: GetProductsOpt): Promise<Product[]> => {
  await sleep(2);
  const filteredURL = filterKey ? `category=${filterKey}` : '';
  const { data } = await productsAPI.get<Product[]>(`/products?${filteredURL}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await productsAPI.get<Product>(`/products/${id}`);
  return data;
};
