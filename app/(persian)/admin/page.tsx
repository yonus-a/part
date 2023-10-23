"use client";

import "./styles.scss";
import Lottie from "lottie-react";
import AdminBag from "@public/animation/admin-bag.json";

export default function Admin() {
  return (
    <main className="admin">
      <Lottie animationData={AdminBag} loop={true} className="animation" />
      <p className="copywrite">تمامی حقوق و محتوا برای شرکت
پردازش اطلاعات مالی پارت محفوظ می باشد</p>
    </main>
  );
}
