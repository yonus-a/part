import "./styles.scss";

export default function CustomInput({ type, name, placeholder }: any) {
  return (
    <input
      className="custom-input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
