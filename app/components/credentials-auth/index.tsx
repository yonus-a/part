"use client";

import { useRouter } from "next/navigation";
import LabledInput from "../labeld-input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Button from "../button";
import "./styles.scss";

interface Props {
  setErrorMsg: any;
  callbackUrl: string;
}

export default function CredentialsAuth({ setErrorMsg, callbackUrl }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", { redirect: false, ...data });

    if (result?.ok) {
      router.push("/admin");
    } else {
      setErrorMsg(result?.error);
    }
  };

  return (
    <form className="credentials-auth" onSubmit={handleSubmit(onSubmit)}>
      <LabledInput
        register={register}
        errors={errors}
        label="نام کاربری"
        name="username"
        type="text"
      />
      <LabledInput
        register={register}
        errors={errors}
        label="رمز عبور"
        name="password"
        type="password"
      />
      <Button className="submit" type="submit">
        ثبت نام
      </Button>
    </form>
  );
}
