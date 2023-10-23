import Container from "../container";
import Image from "next/image";
import "./styles.scss";

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
        <h2 className="wow fadeUp">Our Licences</h2>
        <ul>
          {data.map(({ id, icon, text }: any, idx: number) => (
            <li key={id} className="wow fadeUp">
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
