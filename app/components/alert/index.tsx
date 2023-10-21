import Lottie from "lottie-react";
import SuccessAnimation from "@public/animation/success.json";
import ErrorAnimation from "@public/animation/error.json";
import "./style.scss";

interface Props {
  msg: string;
  type: string;
}

export default function Alert({ msg, type }: Props) {
  let animation = {};

  switch (type) {
    case "success":
      animation = SuccessAnimation;
      break;
    case "error":
      animation = ErrorAnimation;
      break;
  }

  return (
    <div className={`alert alert__${type}`}>
      <Lottie className={`animation`} animationData={animation} loop={true} />
      <p>{msg}</p>
    </div>
  );
}
