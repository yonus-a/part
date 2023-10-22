import Auth from "../../components/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@app/(persian)/api/auth/[...nextauth]/route";
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
