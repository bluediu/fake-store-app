import { Spinner } from '@nextui-org/react';

export const Loading = () => {
  return (
    <div className="flex flex-row justify-center justify-items-center w-screen mt-7">
      <Spinner size="lg" />
    </div>
  );
};
