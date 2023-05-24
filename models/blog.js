import {model , models , Schema} from 'mongoose'


const BlogSchema = new Schema({
    title: {type: 'string' , unique: true},
    tag:String,
    contant:String,
    slugT:{type: 'string' , unique: true},
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
      ,
},{timestapm: true})


const Blog = models.Blog || model('Blog',BlogSchema)

export default  Blog