import { useDropdownContext } from "./DropdownProvider";

const DropdownButton = ({
  children,
  profilePhotoUrl,
  className = '',
  onClick,
  ...rest
}) => {
  const props = useDropdownContext();
  return (
    <button
      {...rest}
      ref={props.buttonRef}
      className={"" + className}
      onClick={() => props.setOpen(!props.open)}
    >
      <img
        className="h-9 w-9 ml-2 rounded-full hover:cursor-pointer"
        src={profilePhotoUrl}
      >
        {children}
      </img>
    </button>
  );
};

export default DropdownButton;
