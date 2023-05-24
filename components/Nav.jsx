'use client'
import Link from 'next/link'
import {useEffect ,useState} from 'react'

import {
    signIn, signOut, useSession,
    getProviders
  } from 'next-auth/react';

const Nav = () => {


    const {data : session}= useSession()

  const [providers, setProviders] = useState(null)
 


  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
   
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Dev Stack</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link href='/' className="mr-5 hover:text-gray-900" >Home </Link>
     <Link href='/about' className="mr-5 hover:text-gray-900" >About </Link>
     <Link href='/blogs' className="mr-5 hover:text-gray-900" >Blogs </Link>
     {  session?.user ?  <Link href='/profile' className="mr-5 hover:text-gray-900" >Profile </Link> :<></>}
   
    <Link href='/contact' className="mr-5 hover:text-gray-900" >Contact Us </Link>
     
    </nav>
    {session?.user ?  <button class="inline-flex items-center bg-blue-500 text-white border-0 py-1 mr-4 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0" onClick={()=> signOut()}>
      Log Out 
    </button> : <>
                <button
                  type='button'
                  className='inline-flex items-center bg-blue-500 text-white border-0 py-1 mr-4 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0'
                >
                <Link href='/register' >Register</Link>
                  
                </button>
                <button
                  type='button'
                
                  
                  className='inline-flex items-center bg-blue-500 text-white border-0 py-1 mr-4 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0'
                >
                 <Link href='/login'> log In</Link>
                </button>
              
        </>} 
  </div>
</header>
      
  )
}

export default Nav