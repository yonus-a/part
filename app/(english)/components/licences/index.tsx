import Image from "next/image";
import "./styles.scss";
import Container from "../container";

const data = [
  {
    icon: "iran-active.png",
    text: "permit of \n knowledge-based company from \n Vice-Presidency for Science & \n Technology",
  },
  {
    icon: "licencepsd-active.png",
    text: "permit of \n investment advice from SEO",
  },
  {
    icon: "licencepsd-active.png",
    text: "permit of \n mutual funds from SEO",
  },
  {
    icon: "licencepsd-active.png",
    text: "permit of \n financial data processing from SEO",
  },
];

export default function Licences() {
  return (
    <section aria-label="licences" className="licences">
      <Container>
        <h2>Our Licences</h2>
        <ul>
          {data.map(({ id, icon, text }: any) => (
            <li key={id}>
              <Image
                src={`/images/logos/${icon}`}
                alt={text}
                width={133}
                height={86}
              />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
