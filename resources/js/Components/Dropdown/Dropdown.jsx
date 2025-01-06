import { useState, useRef } from "react";

import { DropdownContext } from "./DropdownProvider";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";
import DropdownLink from "./DropdownLink";

const DropdownComponent = ({
  className = '',
  children,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <DropdownContext.Provider value={{ open, setOpen, buttonRef }}>
      <div {...rest} className={"relative" + className}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

const Dropdown = Object.assign(DropdownComponent, {
  Button: DropdownButton,
  List: DropdownList,
  Link: DropdownLink,
});

export default Dropdown;
