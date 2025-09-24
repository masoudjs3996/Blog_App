import { ButtonHTMLAttributes, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgComponent from "./SvgComponent";
type SubmitButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      {...rest}
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4 w-full
        ${className}
        `}
    >
      {children}
      {pending && <SvgComponent />}
    </Button>
  );
};

export default SubmitButton;

// import { useFormStatus } from "react-dom";
// import Button from "./Button";
// import SvgComponent from "./SvgComponent";

// export default function SubmitButton({ children, className, ...props }) {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       {...props}
//       disabled={pending}
//       className={`flex items-center justify-center gap-x-4 py-4
//         ${className}
//         `}
//     >
//       {children}
//       {pending && <SvgComponent />}
//     </Button>
//   );
// }
