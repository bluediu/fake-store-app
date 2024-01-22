import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product, productActions } from '..';

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onMutate: (data) => {
      const optimisticProduct = { id: Math.random(), ...data };
      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: data.category }],
        (old) => {
          if (!old) return [optimisticProduct];
          return [...old, optimisticProduct];
        }
      );

      return { optimisticProduct };
    },
    onSuccess: (product, variables, context) => {
      // NOTE: Invalidate a query to refresh data.
      // queryClient.invalidateQueries({
      // queryKey: ['products', { filterKey: data.category }],
      // });

      // NOTE: Update a query's cached data.

      queryClient.removeQueries({
        queryKey: ['product', context.optimisticProduct.id],
      });

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: product.category }],
        (old) => {
          if (!old) return [product];

          return old.map((cacheProduct) => {
            return cacheProduct.id === context.optimisticProduct.id
              ? product
              : cacheProduct;
          });
        }
      );
    },
    onError: (error, variables, context) => {
      queryClient.removeQueries({
        queryKey: ['product', context?.optimisticProduct.id],
      });

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: variables.category }],
        (old) => {
          if (!old) return [];

          return old.filter((cacheProduct) => {
            return cacheProduct.id !== context?.optimisticProduct.id;
          });
        }
      );
    },
  });

  return mutation;
};
