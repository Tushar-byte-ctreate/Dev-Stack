'use client'
import {useState, useEffect} from "react"
import  {Suspense}  from 'react';
import Link from 'next/link'


const Blogs = () => {
  
  const [posts , setPosts] = useState([])

  const getBlog = async () =>{
       const fetchBlog = await fetch('/api/blog')
       const data = await fetchBlog.json()

       if(fetchBlog) return setPosts(data)

       return null
  }
  
  useEffect(()=>{
    getBlog()
  },[])

  return (
    <section class="text-gray-600 min-h-screen body-font">
     
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
  

   
{posts.map((post) =>(
  <div class="p-4 lg:w-1/3">
        <div class="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.tag}</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{post.title}</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link href={`/blogs/${post.slugT}`} class="text-blue-500 inline-flex items-center">Read More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        
        </div>
      </div>
      
))}

     
    </div>
  </div>

</section>
  )
}

export default Blogs