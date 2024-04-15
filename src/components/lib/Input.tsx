import clsx from "clsx";
interface InputProps {
  name?: string;
  value?: string;
  type: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { type, placeholder, className } = props;
  return (
    <input
      name={props.name}
      value={props.value}
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
      onChange={props.onChange}
    />
  );
};
