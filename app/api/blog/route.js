import Blog from '@models/blog'

 import connectToDb from '@utils/dataBase'

export const GET = async (req ) =>{
             await connectToDb()
           try {
            const blog = await Blog.find({})
               return new Response(JSON.stringify(blog),{status: 200})
           } catch (error) {
            console.log(error)
            return new Response("error",{status: 500})
           }
       
}


