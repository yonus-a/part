import styles from "./styles.module.css";

export default function Button(props: any) {
  const classnames = `${styles.btn} ${props.className || ""}`;

  return (
    <button {...props} className={classnames}>
      {props.children}
    </button>
  );
}
