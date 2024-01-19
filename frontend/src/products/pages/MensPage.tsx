import { ProductList, useProducts } from '..';
import { Loading } from '../../shared';

export const MensPage = () => {
  const { isLoading, products } = useProducts({ filterKey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      {isLoading && <Loading />}
      <ProductList products={products} />
    </div>
  );
};
