import {model , models , Schema} from 'mongoose'


const ConSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    company:String,
    subject:String,
    message:String,
})


const Contact = models.Contact || model('Contact',ConSchema)

export default  Contact