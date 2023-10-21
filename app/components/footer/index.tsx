import Image from "next/image";
import Container from "../container";
import NavLinks from "../nav-links";
import "./styles.scss";
import Namads from "../namads";
import MobileOnly from "../mobile-only";
import PcOnly from "../pc-only";

export default function Footer({ data }: any) {
  return (
    <footer>
      <Container>
        <div className="flex-wrapper">
          <a href="#">
            <Image
              src="/images/logo-footer.png"
              alt="شرکت پردازش اطلاعات مالی پارت"
              width={170}
              height={70}
            />
          </a>
          <PcOnly>
            <NavLinks />
          </PcOnly>
        </div>
        <div className="flex-wrapper middle-section">
          <address>
            <PcOnly>
              <div className="group">
                <h4>&copy; 1402</h4>
                <p>
                  تمامی حقوق و محتوا برای شرکت
                  <br /> پردازش اطلاعات مالی پارت محفوظ می باشد
                </p>
              </div>
            </PcOnly>
            <div className="group">
              <h4>آدرس</h4>
              <p>{data.address}</p>
            </div>
            <div className="group">
              <h4>ایمیل و تلفن</h4>
              <p>{data.email}</p>
              <p className="tel">{data.phone}</p>
            </div>
          </address>
          <Namads />
        </div>
        <MobileOnly>
          <p className="copyright">
            تمامی حقوق و محتوا برای شرکت پردازش اطلاعات مالی پارت محفوظ می باشد
          </p>
        </MobileOnly>
      </Container>
    </footer>
  );
}
