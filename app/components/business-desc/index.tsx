import Image from "next/image";
import Container from "../container";
import Icon from "../icon";
import "./styles.scss";

export default function BusinessDesc({ text, image }: any) {
  return (
    <section className="business-desc" aria-label="business description">
      <Container>
        <div className="flex-wrapper">
          <Image src={`/images/${image}`} alt="part" width={630} height={460} />
          <div className="group">
            <p>{text}</p>
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
