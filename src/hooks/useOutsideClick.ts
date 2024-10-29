import { useEffect, RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handleClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as Node) === ref.current) {
        handleClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick]);
};

export default useOutsideClick;
