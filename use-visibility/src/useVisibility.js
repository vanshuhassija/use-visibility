import { createRef, useState, useEffect } from "react";
import throttle from "./throttle";

export default function useVisibility(offset = 0, throttleMilliseconds = 100) {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  });

  return [isVisible, currentElement];
}
