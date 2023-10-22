interface Props {
  name: string;
  title?: string;
}

export default function Icon({ name, title }: Props) {
  return (
    <svg className="icon" {...(!title ? { "aria-hidden": "true" } : {})}>
      {title && <title>{title}</title>}
      <use href={`#${name}`} />
    </svg>
  );
}
