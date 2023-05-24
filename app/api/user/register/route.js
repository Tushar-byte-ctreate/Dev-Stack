import User from '@models/user'
import bcrypt from 'bcrypt'
import connectToDb from '@utils/dataBase'

export const POST = async (req) =>{

    const {name, email,password} = await req.json()
       
             await connectToDb()
             const saltRounds = 12;
             
             const hashedPass = await bcrypt.hash(password, saltRounds)
           try {

            const user = await User.create({name:name, email:email, password:hashedPass})
         
          console.log(user)
               return new Response("ekjhkjfhkwef",{status: 200})
           } catch (error) {
            console.log(error)
            return new Response("nhfkjew",{status: 500})
           }

       
}

