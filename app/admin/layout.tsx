import AdminNav from "@app/components/admin-nav";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
