import Header from "../components/header/page";
import Footer from "../components/footer";

// Import Swiper styles
import "swiper/css";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
