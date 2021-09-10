import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Prisma from '../../../src/clients/prisma';

export default NextAuth({
  providers: [
    // OAuth authentication providers
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,


      profile(profile) {
        console.log(process.env.GITHUB_ID);
        return {
          id: profile.id.toString(),
          name: profile.name || (profile.login as string),
          email: profile.email,
          image: profile.avatar_url as string,
        };
      }
    }),
    // Providers.Apple({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // Providers.Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // Sign in with passwordless email link
    // Providers.Email({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
  // SQL or MongoDB database (or leave empty)
  adapter: PrismaAdapter(Prisma),
})