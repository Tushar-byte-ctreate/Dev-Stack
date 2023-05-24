'use client'
import {useState , useEffect}  from "react"
import {useSession} from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import Create from '@components/Create'
import slugify from "slugify";

const CreateBlog = () => {

    const searchParams = useSearchParams();
    const blogSlug = searchParams.get("slug");

     console.log(blogSlug)

    const router = useRouter()
    const {data:session }= useSession()  
    const [post , setPost] = useState({
    title:'',
    tag:'',
    contant:''
})
const [submitting, setIsSubmitting] = useState(false);

useEffect( ()=>{
    const getBlogs = async ()=>{
        const blog = await fetch( `/api/blog/${blogSlug}`)
        const data = await blog.json()

          console.log(data)
       return setPost(data)

    }
 
   if( blogSlug) getBlogs()

},[blogSlug])


const handleSubmit = async (e)=>{
e.preventDefault();
setIsSubmitting(true);
const slugT = slugify(post.title, {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: false,       // strip special characters except replacement, defaults to `false`
    locale: 'vi',     // convert to lower case, defaults to `false`
    strict: false,     // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
  })
  console.log(slugT)
  try {
    const response =  await fetch(`/api/blog/${blogSlug}`,{
        method: 'POST',
        body: JSON.stringify({
          bloggId :post._id,
            title:post.title,
            tag:post.tag,
            contant:post.contant,
            slugT: slugT,
            creator: session?.user.id
        },
        )     
    }
    )
    if(response.status === 200) router.push('/profile')
   
    
  } catch (error) {
    alert('somthis went error')
  }finally{
    setIsSubmitting(false);
  }

}

// const handledelete = async() =>{
//    const hasCon


// }
  return (
   <Create
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={handleSubmit}
   />
  )
}

export default CreateBlog