import { useQueryClient } from '@tanstack/react-query';
import { productActions } from '..';

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = async (id: number) => {
    // The results of this query will be cached like a normal query
    await queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => productActions.getProductById(id),
    });
  };

  return prefetchProduct;
};
