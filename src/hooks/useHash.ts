import { useState, useCallback, useEffect } from 'react';

export const useHash = (): [string, (newHash: string) => void] => {
  const [hash, setHash] = useState<string>(() => window.location.hash);

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, [hashChangeHandler]); // Added hashChangeHandler to dependencies

  const updateHash = useCallback(
    (newHash: string): void => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
};




// This version adds type aliases to make the code more readable and maintainable. The type aliases also make it easier to modify the types if needed in the future.

type HashString = string;
type HashSetter = (newHash: string) => void;
type UseHashReturn = [HashString, HashSetter];

export const useHash2 = (): UseHashReturn => {
  const [hash, setHash] = useState<HashString>(() => window.location.hash);

  const hashChangeHandler = useCallback((): void => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, [hashChangeHandler]);

  const updateHash = useCallback(
    (newHash: HashString): void => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
};