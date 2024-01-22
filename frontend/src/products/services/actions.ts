import { Product, productsAPI } from '..';

interface GetProductsOpt {
  filterKey?: string;
}

export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getProducts = async ({
  filterKey,
}: GetProductsOpt): Promise<Product[]> => {
  // await sleep(2);
  const filteredURL = filterKey ? `category=${filterKey}` : '';
  const { data } = await productsAPI.get<Product[]>(`/products?${filteredURL}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await productsAPI.get<Product>(`/products/${id}`);
  return data;
};

interface ProductLike {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const createProduct = async (product: ProductLike): Promise<Product> => {
  // await sleep(5);
  // throw new Error('Error!');

  const { data } = await productsAPI.post<Product>('/products', product);
  return data;
};
