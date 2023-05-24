import React from 'react'

const Create = ({type, post, setPost ,handleSubmit,submitting}) => {
  return (
   <section className='w-full h-full'>
    <div className='w-full h-full flex justify-center items-center' >
        <form onSubmit={handleSubmit} className='w-3/4'>
        <div > <h1 className='text-black-200 text-xl font-bold '> Create Here Your Blog</h1> </div>
        <div>
        <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title*</label>
        <input 
        value={post.title}
         onChange={(e) => setPost({...post,title: e.target.value})} name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div><div>
        <label for="Tags" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Tags * ex. #idea , #web etc.</label>
        <input
        value={post.tag} 
        onChange={(e)=>setPost({...post, tag:e.target.value})}
         name="tags" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
      <div>
      <label for="Tags" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Contant Here*.</label>
      <textarea
      value={post.contant} 
        onChange={(e)=>setPost({...post, contant:e.target.value})}
      class="peer h-full min-h-[400px] w-full resize-none rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500  focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    ></textarea>
      </div>
      <button
        type='submit'
            disabled={submitting}

    class="middle none center mb-5 mr-3 rounded-lg bg-blue-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
  >
 {submitting ? `${type}ing...` : type}
  </button>
        </form>
    </div>
   </section>
  )
}

export default Create