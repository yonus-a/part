import Container from "@app/components/container";
import "./styles.scss";
import prisma from "@lib/prisma";
import UpdateServicesForm from "@app/components/update-services-from";

async function getData() {
  return await await prisma.home.findMany({
    select: {
      services: true,
    },
  });
}

export default async function UpdateServices() {
  const data = await getData();

  return (
    <main className="update-services">
      <Container>
        <UpdateServicesForm services={data[0].services} />
      </Container>
    </main>
  );
}
