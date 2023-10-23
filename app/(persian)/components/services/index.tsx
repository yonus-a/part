import Container from "../container";
import Image from "next/image";
import "./styles.scss";

export default function Services({ text, image }: any) {
  return (
    <section className="services" aria-label="services">
      <Container>
        <div className="flex-wrapper">
          <Image
            className="wow fadeUp"
            src={`/images/${image}`}
            alt="part"
            width={660}
            height={460}
          />
          <div className="group wow fadeUp">
            <h2>خدمات</h2>
            <p>{text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
