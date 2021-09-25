const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex: true
})

// ################################################## data moved to user.js #######################################
// const User = mongoose.model('User',{
//     name:{
//         type:String,
//         required: true,
//         trim: true
//     },
//     age: {
//         type:Number,
//         default: 0
//     },
//     email: {
//         type : String,
//         required: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error("Email is invalid")
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,    //can use minlength:7
//         validate(value) {
//             if(value.length < 6 || value.toLowerCase().includes("password")) {
//                  throw new Error("Password is min 6 letter and cant be 'password' ")
//             }
//         }
//     }
// })

// ########################### not required as model moved to user.js ######################

// const me = new User({
//     name: 'Sudha Murty',
//     age:27,
//     email: 'teja@gmail.com',
//     password:'Dudha Murty'
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error !',error)
// })