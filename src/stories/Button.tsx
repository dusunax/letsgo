interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "bg-blue-500 text-white"
    : "border-blue-500 text-blue-500 font-bold";
  let sizeMode;

  switch (size) {
    case "small":
      sizeMode = "px-2 py-1 text-xs";
      break;
    case "medium":
      sizeMode = "px-6 py-2 text-md";
      break;
    case "large":
      sizeMode = "px-10 py-2 text-xl";
      break;
    default:
  }

  return (
    <button
      type="button"
      className={[
        "rounded-3xl border-2 hover:shadow-md",
        `${sizeMode}`,
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
