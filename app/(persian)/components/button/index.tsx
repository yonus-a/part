import "./styles.scss";

export default function Button(props: any) {
  const classnames = `btn ${props.className || ""}`;

  return (
    <button {...props} className={classnames}>
      {props.children}
    </button>
  );
}
