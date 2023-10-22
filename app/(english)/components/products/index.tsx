import Image from "next/image";
import "./styles.scss";
import Container from "../container";

const data = [
  {
    id: 1,
    icon: "merat.png",
    text: "Merat",
    subText: "Credit Scoring Platform",
  },
  {
    id: 2,
    icon: "partian.png",
    text: "Partian",
    subText: "Venture Capital Fund",
  },
  {
    id: 3,
    icon: "finantial.png",
    text: "Financial Intelligence Academy",
    subText: "Golden Ratio of life",
  },
  {
    id: 4,
    icon: "etemad.png",
    text: "Etemad",
    subText: "Credit Rating Platform",
  },
  {
    id: 5,
    icon: "rasam-logo.png",
    text: "Rasam",
    subText: "Trading Platform",
  },
  {
    id: 6,
    icon: "ai.png",
    text: "Part Artificial Intelligence",
    subText: "AI Research Center",
  },
  {
    id: 7,
    icon: "kap.png",
    text: "Kap",
    subText: "Part Pay",
  },
  {
    id: 8,
    icon: "signal.png",
    text: "Signal",
    subText: "Signal Application",
  },
  {
    id: 9,
    icon: "sabyyar.png",
    text: "Sabtyar",
    subText: "Sabt Yar",
  },
];

export default function Products() {
  return (
    <section className="product-services" aria-label="products and services">
      <Container>
        <h2>Products & Services</h2>
        <ul>
          {data.map(({ id, icon, text, subText }: any) => (
            <li key={id}>
              <Image
                src={`/images/logos/${icon}`}
                width={69}
                height={69}
                alt={subText}
              />
              <h3>{text}</h3>
              <p>{subText}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
