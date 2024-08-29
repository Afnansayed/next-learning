import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { async } from './../../../comments/api/[id]/route';
const handler = NextAuth({
     session: {
        strategy: "jwt"
     },
     providers : [
        CredentialsProvider({
             credentials : {
                email: {label : "Email" , type: "text", placeholder: "Email" , required : true},
                password: {label : "Password" , type: "password", placeholder: "Password" , required : true}
             },

             async authorize (credentials){
                if(!credentials){
                    return null;
                }
                return true;
             }

        })
     ]
})

export {handler as GET , handler as POST};