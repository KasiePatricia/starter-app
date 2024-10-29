import { RefObject, useEffect } from 'react';

type CallbackFunction = () => void;

export const useClickInside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: CallbackFunction
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

// usage
// const buttonRef = useRef<HTMLButtonElement>(null);
// useClickInside<HTMLButtonElement>(buttonRef, () => {
//   console.log('Clicked outside button!');
// });