'use client'

import {useEffect , useState} from 'react'



const page = ({params}) => {

  const [blog , setBlog] = useState({})
  // getting params path 'slug'
  


  const getData = async () => {
    //fetchung data via api request
    const fetchBlog = await fetch(`/api/blog/${params.slug}`)

    const data = await fetchBlog.json()
console.log(data)
    if(fetchBlog.status === 200) return setBlog(data)

    return null
  } 

  useEffect(() => {
    getData()
  },[])


  return (
    <section className='w-full min-h-screen'>
    <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1 className='text-2xl font-bold pt-2 pb-2'>{blog.title}</h1>
               <h4 className='text-lg font-bold pt-1'>{blog.tag}</h4>   
                <p>{blog.contant}</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default page