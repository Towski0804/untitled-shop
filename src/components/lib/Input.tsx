import clsx from "clsx";
interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, className } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        "border",
        "outline-none",
        "text-sm",
        "h-[40px]",
        "p-[20px]",
        className,
      )}
    />
  );
};
