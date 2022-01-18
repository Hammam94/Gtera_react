import { useCallback, useState } from 'react';

const useForceUpdate = (): () => void => {
  const [, updateComponent] = useState<[]>();
  return useCallback(() => updateComponent([]), []);
};

export default useForceUpdate;
