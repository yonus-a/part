"use client";

import Link from "next/link";
import Container from "../container";
import Lottie from "lottie-react";
import CompanyAnimation from "@public/animation/company.json";
import "./styles.scss";

export default function About() {
  return (
    <section className="about" aria-label="About company">
      <Container>
        <div className="group wow fadeUp">
          <h2>About company</h2>
          <p>
            Part Financial Data Processing is both a knowledge-based and private
            company (commonly referred as “Part”) which commenced its
            professional activity in June 23, 2013 under the authorization of
            Securities and Exchange Organization of Iran (SEO). From the very
            beginning, we did concentrate solely on four areas, namely credit
            scoring & rating, financial market services, software technology and
            last but not least, artificial intelligence (AI).
          </p>
          <Link href="#">Read More</Link>
        </div>
        <div className="animation-wrapper">
          <Lottie
            className="animation wow fadeUp"
            animationData={CompanyAnimation}
            loop={true}
          />
        </div>
      </Container>
    </section>
  );
}
