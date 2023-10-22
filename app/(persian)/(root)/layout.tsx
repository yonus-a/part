import Header from "../components/header/page";
import Footer from "../components/footer";
import WOWINIT from "../components/WOWINIT";

// Import Swiper styles
import "swiper/css";
import prisma from "@lib/prisma";

// import animate.css
import "animate.css";

interface Props {
  children: React.ReactNode;
}

async function getData() {
  "use server";

  return await prisma.general_info.findMany();
}

export default async function MainLayout({ children }: Props) {
  const data = (await getData())[0];

  return (
    <>
      <Header />
      {children}
      <Footer data={data} />
      <WOWINIT />
    </>
  );
}
