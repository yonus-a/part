import Image from "next/image";
import Container from "../container";
import CustomInput from "../custom-input";
import CustomTextarea from "../custom-textarea";
import EqualizeItems from "../equalize-items";
import "./styles.scss";
import Button from "@app/(persian)/components/button";

export default function ContactUs() {
  return (
    <section aria-label="Contact us" className="contact-us">
      <Container>
        <h2>Contact us</h2>
        <form action="#">
          <EqualizeItems>
            <CustomInput type="text" name="name" placeholder="Name" />
            <CustomInput type="email" name="name" placeholder="Email" />
          </EqualizeItems>
          <CustomTextarea name="message" placeholder="Message" rows={6} />
          <EqualizeItems>
            <CustomInput type="text" name="name" placeholder="Captcha" />
            <Image src="/images/captcha.svg" width={251} height={67} alt="" />
          </EqualizeItems>
          <Button type="submit" className="submit">
            Submit
          </Button>
        </form>
      </Container>
    </section>
  );
}
