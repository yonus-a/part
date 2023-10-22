import UpdateFooterForm from "../../components/update-footer-from";
import Container from "../../components/container";
import prisma from "@lib/prisma";
import "./styles.scss";

async function getData() {
  return await await prisma.general_info.findMany({});
}

export default async function UpdateFooter() {
  const data = await getData();

  return (
    <main className="update-footer">
      <Container>
        <UpdateFooterForm data={data[0]} />
      </Container>
    </main>
  );
}
