import Auth from "@app/components/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import "./styles.scss";

export default async function SignIn({ searchParams }: any) {
  const session = await getServerSession(authOptions);
  const { callbackUrl } = searchParams;

  if (session) {
    redirect("/admin");
  }

  return (
    <main className="signin">
      <Auth callbackUrl={callbackUrl} />
    </main>
  );
}
