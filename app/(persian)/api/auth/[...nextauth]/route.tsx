import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@lib/prisma";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
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
          const match = await bcrypt.compare(password, maybeUser.password);

          if (match) {
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
