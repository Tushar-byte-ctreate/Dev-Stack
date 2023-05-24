import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from '@utils/dataBase'
import User from '@models/user'
import bcrypt from 'bcrypt'


const  handler = NextAuth({
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  

  providers: [
    CredentialsProvider({
    
      async authorize(credentials ,req) {
      console.log(credentials)
      await connectToDb()
        const user = await User.findOne({
          email: credentials.email,
        });
        
console.log(user ,'hhjjgbggjhjy')
        if (!user) {
        
          throw new Error('No user found!');
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error('Could not log you in!');
        }
        return user;
      },
    }),
   
  ],

  secret :"thishdwdhwsdwdwdwd3322@@@5s55s5dsddws555d77wsd7w@@Eljkwndw",
  jwt: {
    secret: 'vsvdvsnva3f6s6sw6r3@E$R$Rgdgdfdegdgdsgdxv',
}
});



// const handler = NextAuth({
//   providers:[
//     CredentialsProvider({
//       name:'credentials',

//       async authorize(credentials, req){
//         console.log(credentials)

//         await connectToDb()
//         const user = await User.findOne({ email:credentials.email})
//         console(user)
//         if(user){
//           const verifyPass = await bcrypt.compare(credentials.password ,user.passwod )

//         if(verifyPass){
//           return new Response('done',{user})
//         } 
//         return new Response(" Password wrong")      
//            }
//         else{
//           return new Response(" There is no user with this email address")
//         }
//       }
//     })
//   ],
//   callbacks: {
//     jwt: async ({ token, user }) => {
//         user && (token.user = user)
//         return token;
//     },
//     session: async ({ session, token }) => {
//         session.user = token.user
//         return session;
//     }
// },
// secret: "secret",
// jwt: {
//     secret: "ksdkfsldferSDFSDFSDf",
//     encryption: true,
// },
// session: {
//   jwt: true, 
//   // Seconds - How long until an idle session expires and is no longer valid.
//   maxAge: 30 * 24 * 60 * 60, // 30 days
// },
// })





export { handler as GET , handler as POST}