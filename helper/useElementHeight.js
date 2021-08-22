import { useCallback, useEffect, useRef, useState } from "react";

const useElementHeight = () => {
  const [elementHeight, setElementHeight] = useState(0);
  const elementRef = useRef();

  const handleResize = useCallback(() => {
    setElementHeight(elementRef?.current.offsetHeight);
  }, [elementRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { elementHeight, elementRef };
};

export default useElementHeight;
