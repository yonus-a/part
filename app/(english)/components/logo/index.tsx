import "./styles.scss";
import Icon from "@app/(persian)/components/icon";

export default function Logo() {
  return (
    <div className="en-logo-transparent">
      <Icon name="logo" />
      <div className="group">
        <p className="brand">Part</p>
        <p className="slogan">Financial Data Processing Company</p>
      </div>
    </div>
  );
}
