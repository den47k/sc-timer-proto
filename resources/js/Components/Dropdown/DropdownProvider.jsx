import { createContext, useContext } from "react";


export const DropdownContext = createContext(null);

export const useDropdownContext = () => {
  const props = useContext(DropdownContext);

  if (!props) {
    throw new Error("No dropdown context was provided");
  }

  return props;
}
