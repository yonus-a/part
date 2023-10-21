import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@lib/prisma";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "نام کاربری", type: "text" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { username, password } = credentials;

        if (!username || !password) {
          throw new Error("username and password are required");
        }

        const maybeUser = await prisma.user.findFirst({
          where: {
            username,
          },
        });

        if (maybeUser) {
          if (password === maybeUser.password) {
            return maybeUser;
          }
        }

        throw new Error("نام کاربری یا رمز اشتباه است");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
