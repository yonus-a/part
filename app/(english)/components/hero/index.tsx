"use client";

import Lottie from "lottie-react";
import DataProcessingAnimaiton from "@public/animation/data-processing.json";
import Container from "../container";
import "./styles.scss";
import Icon from "@app/(persian)/components/icon";

const list = [
  {
    id: 1,
    logo: "credit",
    text: "Credit Scoring & Rating",
  },
  {
    id: 3,
    logo: "market",
    text: "Capital Market",
  },
  {
    id: 2,
    logo: "ai",
    text: "IT & Artificial Intelligence",
  },
];

export default function Hero() {
  return (
    <section aria-label="hero" className="en-hero">
      <Container>
        <h1 className="wow fadeUp" data-wow-duration="1.2s">
          Part Financial Data Processing
        </h1>
        <Lottie
          className="animation wow fadeUp"
          animationData={DataProcessingAnimaiton}
          loop={true}
        />
        <ul className="wow fadeUp">
          {list.map(({ id, logo, text }: any) => (
            <li key={id}>
              <Icon name={logo} />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
