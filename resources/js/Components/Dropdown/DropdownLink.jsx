import { Link } from "@inertiajs/react";
import { useDropdownContext } from "./DropdownProvider";

const DropdownLink = ({ className = '', children, ...rest }) => {
  const props = useDropdownContext();
  return (
    <Link
      {...rest}
      onClick={() => props.setOpen(false)}
      className={
        'block px-4 py-3 w-full text-left text-sm leading-5 text-gray-200 opacity-80 dark:bg-base-700 hover:bg-base-800 focus:outline-none focus:bg-base-800 transition duration-150 ease-in-out z-50 rounded-md ' +
        className
      }
    >
      {children}
    </Link>
  );
}

export default DropdownLink;
