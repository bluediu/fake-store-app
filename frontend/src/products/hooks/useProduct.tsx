import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface Props {
  id: number;
}

export const useProduct = ({ id }: Props) => {
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, error, product };
};
