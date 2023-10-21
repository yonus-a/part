import Container from "@app/components/container";
import "./styles.scss";
import prisma from "@lib/prisma";
import UpdateAboutForm from "@app/components/update-about-from";

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
