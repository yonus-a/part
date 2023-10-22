"use client";

import PrimaryBtn from "@app/components/primary-btn";
import Alert from "@app/components/alert";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./style.scss";
import LabledInput from "../labeld-input";
import updateFooterAction from "@server-action/updateFooterAction";

export default function UpdateFooterForm({ data }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);

  const onSubmit = async (data: any) => {
    const result: any = await updateFooterAction(data);
    if (result.id) {
      setAlert({ type: "success", msg: "تغیرات با موفقیت اعمال شد" });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  return (
    <div className="update-footer-form">
      {alert && <Alert {...alert} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabledInput
          register={register}
          type="text"
          name="address"
          label="آدرس"
          errors={errors}
          defaultValue={data.address}
        />
        <LabledInput
          register={register}
          type="text"
          name="email"
          label="آدرس ایمیل"
          errors={errors}
          defaultValue={data.email}
        />
        <LabledInput
          register={register}
          type="text"
          name="phone"
          label="شماره تلفن"
          errors={errors}
          defaultValue={data.phone}
        />
        <PrimaryBtn className="submit" type="submit">
          اعمال تغیرات
        </PrimaryBtn>
      </form>
    </div>
  );
}
