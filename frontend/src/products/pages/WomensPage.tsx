import { ProductList, useProducts } from '..';
import { Loading } from '../../shared';

export const WomensPage = () => {
  const { isLoading, products } = useProducts({
    filterKey: "women's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <Loading />}
      <ProductList products={products} />
    </div>
  );
};
