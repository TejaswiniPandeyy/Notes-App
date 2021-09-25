const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true
})

///////////////////////// data moved to task.js /////////////////////////////////

// const task = mongoose.model('tasks',{
//     description: {
//         type : String,
//         trim : true,
//         required : true

//     },
//     completed: {
//         type:Boolean,
//         default: false
//     }
// })

/////////////////// sice above data moved to task.js below code not valid //////////////////////

// const today = new task({
//     description: "Complete mongoose and rest api"
// })

// today.save().then(() => {
//     console.log(today)
// }).catch((error) => {
//     console.log("error!",error)

// })
