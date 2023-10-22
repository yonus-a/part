import AdminNav from "../components/admin-nav";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <main style={{ marginRight: 400 }}>
      <AdminNav />
      {children}
    </main>
  );
}
