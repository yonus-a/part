"use client";

import Lottie from "lottie-react";
import DataProcessingAnimaiton from "@public/animation/data-processing.json";
import Container from "../container";
import "./styles.scss";
import Icon from "@app/(persian)/components/icon";

const list = [
  {
    id: 1,
    logo: "tating",
    text: "Credit Scoring & Rating",
  },
  {
    id: 2,
    logo: "it",
    text: "IT & Artificial Intelligence",
  },
  {
    id: 3,
    logo: "market",
    text: "Capital Market",
  },
];

export default function Hero() {
  return (
    <section aria-label="hero" className="en-hero">
      <Container>
        <h1>Part Financial Data Processing</h1>
        <Lottie
          className="animation"
          animationData={DataProcessingAnimaiton}
          loop={true}
        />
        <ul>
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
