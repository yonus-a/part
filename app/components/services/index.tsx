import Container from "../container";
import Image from "next/image";
import "./styles.scss";

const data = {
  text: "پارت با كمك دست اندركاران بازارهای مالی ایران، داده‌های متنوع از دیدگاه‌های گوناگون را گردآوری می‌کند و پس از پردازش به صورت‌های مختلف در اختیار علاقمندان قرار می‌دهد. این شرکت طیف متنوعی از سرمایه‌گذاران، از افرادی با حداقل دانش سرمایه‌گذاری تا متخصصین بازار سرمایه را به‌عنوان مشتریان خود در نظر گرفته و می‌کوشد نیاز هر گروه را به نحو شایسته پاسخ گوید",
  image: "service-desc-image-min.jpg",
};

export default function Services() {
  return (
    <section className="services" aria-label="services">
      <Container>
        <div className="flex-wrapper">
          <Image
            src={`/images/${data.image}`}
            alt="part"
            width={630}
            height={460}
          />
          <div className="group">
            <h2>خدمات</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
