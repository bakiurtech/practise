// button types
type ButtonVariant = "default" | "counting";

// size of the button
type ButtonSize = "sm" | "md" | "lg";

// button shape
type ButtonShape = "rectangle" | "circle";

// buttonprops
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
};

// style for button variant
const VARIANT_CLASS: Record<ButtonVariant, string> = {
  default: "",
  counting: "",
};

// style for button size
const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "",
  md: "",
  lg: "",
};

// shape for button shape
const SHAPE_CLASS: Record<ButtonShape, string> = {
  rectangle: "",
  circle: "",
};




export function Button({
  variant = "default",
  size = "md",
  shape = "rectangle",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${SHAPE_CLASS[shape]}`}
      {...props}
    >
      {children}
    </button>
  );
}
