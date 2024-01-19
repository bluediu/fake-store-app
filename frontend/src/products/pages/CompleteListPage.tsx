import { ProductList, useProducts } from '..';
import { Loading } from '../../shared';

export const CompleteListPage = () => {
  const { isLoading, products } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      {isLoading && <Loading />}
      <ProductList products={products} />
    </div>
  );
};
