"use client";
import Button from "@ui/Button";
import RHFTextField from "@ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@context/AuthContext";
import { SpinnerMini } from "@ui/Spinner";

const schema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل نامعتبر است ")
      .required("وارد کردن ایمیل الزامی است "),
    password: yup.string().required("وارد کردن رمز عبور  الزامی است "),
  })
  .required();
const Signin: React.FC = () => {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const HadlerSubmitForm = async (values: any) => {
    await signin(values);
  };
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
          ورود
        </h1>
        <form onSubmit={handleSubmit(HadlerSubmitForm)} className="space-y-10">
          <RHFTextField
            name="email"
            register={register}
            label="ایمیل "
            dir="ltr"
            isRequired
            errors={errors}
          />
          <RHFTextField
            name="password"
            register={register}
            label="رمز عبور  "
            dir="ltr"
            type="password"
            isRequired
            errors={errors}
          />
          {isSubmitting ? (
            <SpinnerMini />
          ) : (
            <Button variant="primary" className="w-full" type="submit">
              ارسال
            </Button>
          )}
        </form>
        <Link href="/signup" className="text-secondary-500 mt-6 text-center ">
          ثبت نام
        </Link>
      </div>
    </>
  );
};

export default Signin;
