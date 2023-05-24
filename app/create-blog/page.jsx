'use client'
import {useState , useEffect}  from "react"
import {useSession} from "next-auth/react"
import { redirect, useRouter } from "next/navigation";
import Create from '@components/Create'
import slugify from "slugify";

const CreateBlog = () => {

    const router = useRouter()
    const {data:session }= useSession()
const [post , setPost] = useState({
    title:'',
    tag:'',
    contant:''
})

const [submitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e)=>{
e.preventDefault();
setIsSubmitting(true);
const slugT = slugify(post.title, {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: false,      // convert to lower case, defaults to `false`
    strict: false,     // strip special characters except replacement, defaults to `false`
    locale: 'vi',      // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
  })
  console.log(slugT)
const response =  await fetch('/api/blog/new',{
    method: 'POST',
    body: JSON.stringify({
        title:post.title,
        tag:post.tag,
        contant:post.contant,
        slugT: slugT,
        creator: session?.user.id
    },
    
    ) 
}
)
setIsSubmitting(false);
 console.log(response)
    router.push('/profile',)

}
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