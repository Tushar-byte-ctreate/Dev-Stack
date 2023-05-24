

const loading = () => {
    return (
        <section class="text-gray-600 min-h-screen body-font">
     
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
        
      
         
      { [...Array(3).keys()].map((i) =>(
        <div key={i} className="p-4 lg:w-1/3 h-80">
              <div class="h-80 bg-gray-400 bg-opacity-75 animate-pulse px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative" style={{animationDelay:`${i *0.05}s`,
              animationDuration:'1s'
              }}>
                
              
              </div>
            </div>
            
      ))}
      
           
          </div>
        </div>
      
      </section>
    )
  }
  
  export default loading