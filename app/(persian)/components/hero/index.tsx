import Image from "next/image";
import "./styles.scss";
import Link from "next/link";

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
        <h1 className="wow fadeUp">پردازش اطلاعات مالی پارت</h1>
        <p className="wow fadeUp">دستیار هوشمند اقتصادی شما</p>
      </div>
      <Link href="#content" className="scroll-down">
        <Image
          src="/icons/scroll-down.png"
          alt="scroll down"
          width={43}
          height={100}
        />
      </Link>
    </section>
  );
}
