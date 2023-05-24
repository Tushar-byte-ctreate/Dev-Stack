import React from 'react'

const loading = () => {
  return (
    <section className='w-full min-h-screen'>
    <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto" style={{animationDelay:`${3 *0.05}s`,
              animationDuration:'1s'
              }}>
                <h1 className='w-96 h-12 bg-gray-300 pt-2 pb-2'></h1>
                <h4 className='w-96 h-12 bg-gray-300 pt-1'></h4>   
                <p className='w-96 h-96 bg-gray-300 '></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default loading