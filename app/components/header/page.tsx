import styles from "./styles.module.css";
import Button from "../button";
import Nav from "../nav/page";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <Button>
        <Image src="/icons/en.png" alt="language" width={40} height={40} />
      </Button>
    </header>
  );
}
