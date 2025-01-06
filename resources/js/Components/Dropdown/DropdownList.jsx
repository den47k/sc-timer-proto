import useOnOutsideClick from "@/hooks/useOnOutsideClick";
import { useDropdownContext } from "./DropdownProvider";

const DropdownList = ({ align = 'right', children, className = '', ...rest }) => {
  const props = useDropdownContext();
  const ref = useOnOutsideClick(() => props.setOpen(false), props.buttonRef);

  if (!props.open) return null;

  const alignmentClasses = (() => {
    if (align === 'left') {
      return 'origin-top-left left-0 ';
    } else if (align === 'right') {
      return 'origin-top-right right-0 ';
    } else {
      return 'origin-top ';
    }
  })();

  return (
    <div
      {...rest}
      ref={ref}
      className={
        'absolute overflow-visible mt-2 w-48 rounded-md dark:bg-base-700 shadow-lg ring-1 ring-black ring-opacity-5 z-50 ' +
        alignmentClasses +
        className
      }
    >
      {children}
    </div>
  );
};

export default DropdownList;
