"use client";
import Button from "@ui/Button";
import RHFTextField from "@ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است ")
      .max(50, "نام و نام خانوادگی نامعتبر است ")
      .required("وارد کردن نام و نام خانوادگی الزامی است "),
    email: yup
      .string()
      .email("ایمیل نامعتبر است ")
      .required("وارد کردن ایمیل الزامی است "),
    password: yup.string().required("وارد کردن رمز عبور  الزامی است "),
  })
  .required();
const Signup: React.FC = () => {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const HadlerSubmitForm = async (values: any) => {
    await signup(values);
  };
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
          ثبت نام
        </h1>
        <form onSubmit={handleSubmit(HadlerSubmitForm)} className="space-y-10">
          <RHFTextField
            name="name"
            register={register}
            label="نام "
            isRequired
            errors={errors}
          />
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
          <Button variant="primary" className="w-full" type="submit">
            ارسال
          </Button>
        </form>
        <Link href="/signin" className="text-secondary-500 mt-6 text-center ">
          ورود
        </Link>
      </div>
    </>
  );
};

export default Signup;
