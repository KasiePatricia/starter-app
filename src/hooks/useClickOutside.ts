import { RefObject, useEffect } from 'react';

type CallbackFunction = () => void;

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: CallbackFunction
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
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

// import { useRef } from 'react';
// const Component = () => {
//   const divRef = useRef<HTMLDivElement>(null);
  
//   useClickOutside(divRef, () => {
//     console.log('Clicked outside!');
//   });

//   return <div ref={divRef}>Click outside me!</div>;
// };




// This generic version allows you to specify the exact HTML element type when using the hook:

export const useClickOutside2 = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: CallbackFunction
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
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
// useClickOutside<HTMLButtonElement>(buttonRef, () => {
//   console.log('Clicked outside button!');
// });