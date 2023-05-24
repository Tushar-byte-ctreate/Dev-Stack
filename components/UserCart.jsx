import Link from 'next/link'

const UserCart = ({data, handleDelete}) => {

  
  return (
    <section>
  <div class="relative">
    <div class="relative flex justify-center">
      <h3 class="pr-3 text-lg font-medium text-neutral-600 bg-white"> All Post </h3>
    </div>
    </div>
  <div class="space-y-8 m-2 lg:divide-y lg:divide-gray-100">
     {data.map((post) => (
      <div class="pt-8 flex justify-center sm:flex lg:items-end group">
      <div>
        <p class="mt-3 text-lg font-medium leading-6">
          <Link href={`/blogs/${post.slugT}`} class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"> {post.title} </Link>
        </p>
        <p class="mt-2 text-lg text-gray-500">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        <div><Link className='w-50 h-30 text-green-500 front-bold' href={`/update-blog?slug=${post.slugT}`}>Edit </Link> <button className='w-50 h-30 text-red-500 front-bold' onClick={()=>handleDelete(post)} >Delete </button></div>
      </div>
    </div>
     )
     
      
     )}

    
   
   
    
  </div>
</section>
  )
}

export default UserCart