"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Container from "../container";
import "./styles.scss";
// Import Swiper styles
import "swiper/css";

const data = {
  image: "certifications-desc-image-min.jpg",
  achievements: [
    {
      id: 1,
      icon: "license7.png",
      text: "مجوز محصولات دانش بنیان",
    },
    {
      id: 2,
      icon: "license1.png",
      text: "مشاور عرضه مشاور پذیرش",
    },
    {
      id: 3,
      icon: "license2.png",
      text: "انجمن مالی اسلامی ایران",
    },
    {
      id: 4,
      icon: "license3.png",
      text: "مرکز فرهنگی دیجیتال",
    },
    {
      id: 5,
      icon: "license1.png",
      text: "مجوز پردازش اطلاعات مالی",
    },
    {
      id: 6,
      icon: "license4.png",
      text: "عضو انجمن مشـاوران مدیــــــریت ایــــران",
    },
    {
      id: 7,
      icon: "license5.png",
      text: "برگزاری دوره‌های آموزشی در حوزه بازار سرمایه",
    },
    {
      id: 8,
      icon: "license6.png",
      text: "عضو انجمن انفورماتیک ایران",
    },
  ],
};

export default function Achievements() {
  return (
    <section className="achievements" aria-label="achievements">
      <Container>
        <div className="flex-wrapper">
          {/* <Image
            src={`/images/${data.image}`}
            alt="part"
            width={630}
            height={460}
          /> */}
          <div className="group">
            <h2>مجوزها، افتخارات</h2>
            <Swiper spaceBetween={15} slidesPerView={"auto"} className="swiper">
              {data.achievements.map(({ id, icon, text }: any) => (
                <SwiperSlide key={id}>
                  <Image
                    src={`/images/license/${icon}`}
                    alt=""
                    width={80}
                    height={80}
                  />
                  {text}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
