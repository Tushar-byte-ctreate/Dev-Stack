import Blog from '@models/blog'


import connectToDb from '@utils/dataBase'

export const GET = async (req, { params }) => {

    await connectToDb()
    try {
        const post = await Blog.findOne({ slugT: params.slug }).populate('creator')
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("error", { status: 500 })
    }
}

export const POST = async (req ,{params}) =>{
    const data = await req.json()
    console.log(data.slug)
    await connectToDb()
  try {
   const blog = await Blog.findOne({slugT:params.slug})
       
   blog.title = data.title
   blog.tag = data.tag
   blog.contant = data.contant
   blog.slugT = data.slugT
   blog.save()


   console.log(blog)
      return new Response(JSON.stringify(blog),{status: 200})
  } catch (error) {
   console.log(error)
   return new Response("error",{status: 500})
  }
  
  }

  export const DELETE = async (req, { params }) => {

    await connectToDb()
    try {
        const post = await Blog.findOneAndDelete({ slugT: params.slug })
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("error", { status: 500 })
    }
}
