import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  Path,
} from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues = FieldValues> = {
  type?: string;
  label: string;
  name: Path<T>;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isRequired?: boolean;
  validationSchema?: RegisterOptions<T, Path<T>>;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
};

const RHFTextField = <T extends FieldValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired = false,
  validationSchema = {},
  ...rest
}: RHFTextFieldProps<T>) => {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;

  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={String(name)} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={String(name)}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-red-600 block text-xs mt-2">
          {String(errorMessages?.message)}
        </span>
      )}
    </div>
  );
};

export default RHFTextField;
