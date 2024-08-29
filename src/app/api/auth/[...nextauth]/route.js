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
                const {email, password} = credentials;
                if(!credentials){
                    return null;
                }
                if(credentials){
                    const currentUser = users.find(user => user.email === email);
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser;
                        }
                    }
                }
             }

        })
     ]
})

const users = [
    {
        id: 1,
        email: "m@gmail.com",
        password: "passwoard"
    },
    {
        id: 2,
        email: "n@gmail.com",
        password: "passwoard"
    },
    {
        id: 3,
        email: "x@gmail.com",
        password: "passwoard"
    },
    {
        id: 4,
        email: "z@gmail.com",
        password: "passwoard"
    },
]

export {handler as GET , handler as POST};