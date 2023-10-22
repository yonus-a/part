import "./styles.scss";

export default function CustomTextarea({ cols, rows, name, placeholder }: any) {
  return (
    <textarea
      className="custom-textarea"
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      name={name}
    />
  );
}
