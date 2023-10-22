"use client";

import Image from "next/image";
import "./styles.scss";
import Container from "../container";

const data = [
  {
    id: 1,
    logo: "signal.png",
    name: "اپلیکیشن سیگنال ابزار کامل سرمایه گذاری",
    desc: "همه فرصت‎های سرمایه‌گذاری در یکجا. از طریق اپلیکیشن سیگنال، آخرین تغییرات قیمت سهام، اوراق بدهی، صندوق‎های سرمایه‌گذاری، طلا، سکه، ارز، نفت و مشتقات، فلزات و... را مشاهده و تحلیل کنید.",
  },
  {
    id: 2,
    logo: "merat.png",
    name: "سامانه اعتبار سنجی مرآت آیینه تمام قد اعتبار شما",
    desc: "سامانه اعتبارسنجی مرآت، سامانه‌ای است در خدمت متقاضیان حقیقی دریافت تسهیلات که افراد را براساس استانداردهای جهانی و به صورت غیرحضوری ارزیابی نموده و توان بازپرداخت ماهانه اقساط و ظرفیت بدهی آنها را محاسبه و اعلام می‌نماید.",
  },
  {
    id: 3,
    logo: "rasam-logo.png",
    name: "رسام صفر تا صد صندوق‌های سرمایه‌گذاری",
    desc: "همه فرصتهای سرمایه گذاری در یکجا. از طریق اپلیکیسن سیگنال، آخرین تغییرات قیمت سهام، اوراق بدهی،‌صندوقهای سرمایه گذاری، طلا، سکه، ارز، نقت، و مشتقات، فلزاتو ...را مشاهده و تحلیل کنید.",
  },
];

export default function Products() {
  return (
    <section className="products" aria-label="products">
      <Container>
        <div className="flex-wrapper">
          {data.map(({ id, logo, name, desc }: any, idx: number) => (
            <div
              key={id}
              className="card wow animate__animated animate__pulse"
              data-wow-delay={`${idx * 300}ms`}
            >
              <Image
                src={`/images/logos/${logo}`}
                alt="name"
                width={120}
                height={120}
              />
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
