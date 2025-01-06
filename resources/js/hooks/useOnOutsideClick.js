import { useEffect, useRef } from "react";

const useOnOutsideClick = (handler, ignoreRef) => {
  const ref = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target) || (ignoreRef?.current && ignoreRef.current.contains(event.target))) {
        return;
      }

      handler(event);
    }

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup the event listeners when the component is unmounted or dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);

  return ref;
}

export default useOnOutsideClick;
