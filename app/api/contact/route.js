import Contact from "@models/contact"
import connectToDb from '@utils/dataBase'

export const POST =async  (req)=>{
    const data= await req.json()
    console.log(data)
      await connectToDb()
    try {
      const contact = await Contact.create(data)

      console.log(contact)
      return new Response("doen",{status: 200})
        
    } catch (error) {
        return new Response(error.message,{status: 500})
    }
}