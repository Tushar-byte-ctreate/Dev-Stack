import mongoose from 'mongoose'

let isConnected = false;

 const connectToDb = async () =>  {
    mongoose.set('strictQuery')
    if(isConnected){
        console.log('DB Connected ');
        return;
    }
    try {
        await mongoose.connect('mongodb+srv://process.env.MONGODB_USER:process.env.MONGODB_PASS@cluster0.9uywv.mongodb.net/',{
            dbName:"Next-Blog",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected:true;
        console.log('DB Connected ');
    } catch (error) {
        console.log(error)
    }
}
export default connectToDb

// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGODB_URI
// mongoose.set('strictQuery', true);
//  mongoose.set( 'useNewUrlParser:true')   
//  mongoose.set( 'useNewUrlParser:true')      
// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect () {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {}
    

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   console.log('db Connected')
//   return cached.conn

// }


// export default dbConnect
