import Image from "next/image";
import "./styles.scss";
import Container from "../container";

const data = [
  {
    id: 1,
    image: "service-financial-processing.png",
    text: "پردازش اطلاعات مالی",
  },
  {
    id: 2,
    image: "service-admission-advice.png",
    text: "مشاوره پذیرش",
  },
  {
    id: 3,
    image: "service-investment-advice.png",
    text: "مشاوره سرمایه گذاری",
  },
  {
    id: 4,
    image: "service-supply-consulting.png",
    text: "مشاوره عرضه",
  },
];

export default function License() {
  return (
    <section id="content" className="license" aria-label="license">
      <Container>
        <h2>مجوز ها</h2>
        <ul>
          {data.map(({ id, image, text }: any, idx: number) => (
            <li
              className="card wow animate__animated animate__pulse"
              data-wow-delay={`${idx * 200}ms`}
              key={id}
            >
              <Image
                src={`/images/license/${image}`}
                width={80}
                height={80}
                alt=""
              />
              {text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
