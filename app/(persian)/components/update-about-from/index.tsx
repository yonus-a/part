"use client";

import Alert from "../../components/alert";
import LabledTextarea from "../../components/labeld-textarea";
import PrimaryBtn from "../../components/primary-btn";
import updateAboutAction from "@server-action/updateAboutAction";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./style.scss";

export default function UpdateAboutForm({ about }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState(null);

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    if (data.aboutImage.length) {
      formData.append("image", data.aboutImage[0]);
    }

    const result: any = await updateAboutAction(data, formData);

    if (result.id) {
      setAlert({ type: "success", msg: "تغیرات با موفقیت اعمال شد" });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  return (
    <div className="update-about-form">
      {alert && <Alert {...alert} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabledTextarea
          register={register}
          name="about"
          label="درباره شرکت"
          errors={errors}
          defaultValue={about}
        />
        <input {...register("aboutImage")} type="file" />
        <PrimaryBtn className="submit" type="submit">
          اعمال تغیرات
        </PrimaryBtn>
      </form>
    </div>
  );
}
