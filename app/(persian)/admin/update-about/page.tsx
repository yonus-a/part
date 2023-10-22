import UpdateAboutForm from "../../components/update-about-from";
import Container from "../../components/container";
import prisma from "@lib/prisma";
import "./styles.scss";

async function getData() {
  return await await prisma.home.findMany({
    select: {
      about: true,
    },
  });
}

export default async function UpdateAbout() {
  const data = await getData();

  return (
    <main className="update-about">
      <Container>
        <UpdateAboutForm about={data[0].about} />
      </Container>
    </main>
  );
}
