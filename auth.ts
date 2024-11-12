import { checkIfNewUser, registerNewUser } from "@/app/lib/actions/UserManagement";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { registerNewUser } from "./userRegistration"; // Assume this function exists

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log('jwt', user, isNewUser);
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            console.log('session', session);
            if(session && session.user)
            {
                session.user.id = token.id as string;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            // alert(`${url}, ${baseUrl}`);
            // return `${baseUrl}/dashboard`;
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return `${baseUrl}/dashboard`;
        },
        async signIn({ user, account, profile }) {
            console.log('user', user);
            console.log('account', account);
            console.log('profile', profile);
            if(!user.email || !user.name) return false;
            if (account?.provider === "google") {
                const isNewUser = await checkIfNewUser(user.email);
                if (isNewUser) {
                    await registerNewUser(user.email, user.name);
                }
            }
            
            return true;
        },
    },
})
