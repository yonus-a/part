import Image from "next/image";
import Container from "../container";
import Icon from "../icon";
import "./styles.scss";

const data = {
  image: "general-desc-image-min.jpg",
  text: `
    شرکت پردازش اطلاعات مالی و مشاور سرمایه‌گذاری پارت با هدف كمك به توسعه و گسترش بازار سرمایه كشور و با بهره‌گیری از دانش و تخصص روز، تاسیس و در بازار سرمایه ایران به عنوان یک شرکت پردازش اطلاعات مالی فعالیت می‌کند.

    پارت با تکیه بر گروهی از بهترین متخصصین حوزه‌ی مالی و فناوری اطلاعات کشور، می‌کوشد زمینه‌ساز ارائه خدماتی نوین در بازار سرمایه ایران باشد. بدین منظور طراحی و انتشار شاخص‌ها و معیارهایی برای سنجش بهتر موقعیت‌های سرمایه‌گذاری در بازار سرمایه ایران، طراحی و پیاده سازی نرم افزارهای قدرتمند بر پایه‌ی اطلاعات مالی و ایجاد بانک اطلاعات جامع مالی به منظور گردآوری و پردازش داده‌های اثرگذار بر تصمیم سرمایه‌گذاران از اهداف اصلی پارت می‌باشد.
  `,
};

export default function BusinessDesc() {
  return (
    <section className="business-desc" aria-label="business description">
      <Container>
        <div className="flex-wrapper">
          <Image
            src={`/images/${data.image}`}
            alt="part"
            width={630}
            height={460}
          />
          <div className="group">
            <p>{data.text}</p>
            <a href="#">
              ادامه
              <Icon name="arrow-left" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
