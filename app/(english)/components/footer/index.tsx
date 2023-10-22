import Button from "@app/(persian)/components/button";
import Icon from "@app/(persian)/components/icon";
import Logo from "../logo";
import "./styles.scss";
import Container from "../container";

export default function Footer() {
  return (
    <footer className="en-footer">
      <Container>
        <div className="col">
          <Logo />
          <p>
            Financial planning involves analyzing the current financial position
            of individuals to formulate strategies for future needs within
            financial constraints.
          </p>
        </div>
        <div className="col">
          <h2>Contact Us</h2>
          <address>
            <p className="icon-wrapper">
              <Icon name="location" />
              No34. Nastaran Alley, Majd Street, shahid Tehrani Moghadam square,
              Tehran, Iran
            </p>
            <p className="icon-wrapper">
              <Icon name="location" />
              +98 21 74318000
            </p>
            <p className="icon-wrapper">
              <Icon name="location" />
              info@partdp.ir
            </p>
          </address>
        </div>
        <div className="col">
          <h2>Subscribe</h2>
          <div className="subscribe">
            <p>
              Financial planning involves analyzing the current financial
              position of individuals to formulate strategies
            </p>
            <input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
