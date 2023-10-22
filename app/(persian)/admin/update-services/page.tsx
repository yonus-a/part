import UpdateServicesForm from "../../components/update-services-from";
import Container from "../../components/container";
import prisma from "@lib/prisma";
import "./styles.scss";

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
