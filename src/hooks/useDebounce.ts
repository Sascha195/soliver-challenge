import {useEffect, useState} from 'react';

const DEFAULT_DELAY = 600;

export const useDebounce = (value: string, delay?: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(
      () => setDebouncedValue(value),
      delay || DEFAULT_DELAY,
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
