import Blog from '@models/blog'


import connectToDb from '@utils/dataBase'

export const POST = async(req) =>{

    const data = await req.json()
    console.log(data)
    try {
        await connectToDb()
        const post = new Blog({
            title: data.title,
     tag:data.tag,
     contant:data.contant,
     slugT:data.slugT,
     creator:data.creator
        })

        console.log(post)
        await post.save();
        return new Response(post,{status:200})
    } catch (error) {
        return new Response("error",{status:500})
    }
}