'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import UserCart from "@components/UserCart"
import { useEffect, useState} from "react"

import { Suspense } from "react"

const page = () => {
  const [posts, setPost]= useState([])

    const {data:session} = useSession()

    const getPost = async () =>{
      const post = await fetch(`/api/user/${session?.user.id}/posts`)
      const data = await post.json()
      console.log(data)
      if(post){
       return  setPost(data)
      }
      return setPost(null)
    }
useEffect(()=>{
  getPost()
},[])

const handleDelete = async (post) => {
  const hasConfirmed = confirm(
    "Are you sure you want to delete this post?"
  );

  if (hasConfirmed) {
    try {
      await fetch(`/api/blog/${post.slugT}`, {
        method: "DELETE",
      });

      const filteredPosts = posts.filter((item) => item._id !== post._id);

      setPost(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  }
};

  return (
    <>
    <div class="relative items-center w-full min-h0-screen px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div class="flex w-full mx-auto text-left">
      <div class="relative inline-flex items-center mx-auto align-middle">
        <div class="text-center">
          <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
           <span className='text-green-500'>HI! </span> I am {session?.user.name} <br class="hidden lg:block"/>
          
          </h1>
          <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">I am posting regulary for all user.</p>
          <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div class="mt-3 rounded-lg sm:mt-0">
              <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"> <Link href='/create-blog'>Create blog</Link></button>
            </div>
        
          </div>
        </div>
      </div>
    </div>
    </div>
    {posts?  < UserCart
      data={posts}
      handleDelete={handleDelete}
    /> : <p>loading...</p>}
   
    
   
</>
  )
}

export default page