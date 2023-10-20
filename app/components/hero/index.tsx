import Image from "next/image";
import "./styles.scss";

const data = {
  bagImg: "hero-bag.jpg",
};

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="hero"
      style={{ backgroundImage: `url(/images/${data.bagImg})` }}
    >
      <div className="center">
        <h1>پردازش اطلاعات مالی پارت</h1>
        <p>دستیار هوشمند اقتصادی شما</p>
      </div>
      <Image
        src="/icons/scroll-down.png"
        alt="scroll down"
        className="scroll-down"
        width={43}
        height={100}
      />
    </section>
  );
}
