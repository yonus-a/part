"use client";

import updateServicesAction from "@server-action/updateServicesAction";
import LabledTextarea from "../../components/labeld-textarea";
import PrimaryBtn from "../../components/primary-btn";
import Alert from "../../components/alert";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./style.scss";

export default function UpdateServicesForm({ services }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    if (data.servicesImage.length) {
      formData.append("image", data.servicesImage[0]);
    }

    const result: any = await updateServicesAction(data, formData);

    if (result.id) {
      setAlert({ type: "success", msg: "تغیرات با موفقیت اعمال شد" });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  return (
    <div className="update-services-form">
      {alert && <Alert {...alert} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabledTextarea
          register={register}
          name="services"
          label="خدمات"
          errors={errors}
          defaultValue={services}
        />
        <input {...register("servicesImage")} type="file" />
        <PrimaryBtn className="submit" type="submit">
          اعمال تغیرات
        </PrimaryBtn>
      </form>
    </div>
  );
}
