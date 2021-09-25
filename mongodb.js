// const mongodb = require('mongodb'); //So as to use npm mongodb
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//Destructing above three lines
const { MongoClient , ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL,{useNewUrlParser:true,},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database!")
    }
    const db = client.db(databaseName)
    //  *******************Down below method is for inserting one document
    // db.collection('users').insertOne({
    //     name:"tejaswini",
    //     age:20
    // },(error,result) => {
    //     if(error){
    //         return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops)
    // })  //---> ye mongoClient ka closing parenthesis hain

    // ***************down below method to insert many
//     db.collection('users').insertMany([
//         {
//             name:"Harsh",
//             age:20
//         },
//         {
//             name:"Vaibhav",
//             age:21
//         }

//     ],(error,result) => {
//         if(error) {
//             return console.log("Unable to insert users");
//         }
//         console.log(result.ops)
//     })


// })
//Completing the challenge given to create the task at hand
// db.collection('tasks').insertMany([
//     {
//         description:"Started the MongoDB folder",
//         completed:true
//     },{
//         description: "Draw a manga character" ,
//         completed:false
//     },{
//         description:"Started REST APIs and Mongoose folder" ,
//         completed: false
//     },{
//         description:"Type and practice on keys10 or type fast finger",
//         completed:false
//     }
// ],(error,result)=> {
//     if(error){
//         console.log("Unable to insert a task")
//     }
//     console.log(result.ops)
// })

//###################Searchinng in database############################
// db.collection('users').findOne({_id: new ObjectID("5f0c616fb04d102f44af9098")},(error,user) => {
//     if(error) {
//         return console.log("Unable to fetch")
//     }
//     console.log(user)
// })

// db.collection('users').find({age:20}).toArray((error,users) => {
//     if(error) {
//         return console.log("unable to fetch")
//     }
//     console.log(users)
// })

// db.collection('users').find({age:20}).count((error,count) => {
//     if(error) {
//         console.log('Unable to fetch')
//     }
//     console.log(count)
// })

//Challenge time -------> ;)

// db.collection('tasks').findOne({_id: new Object("5f4eca9c6c96fa2d0cdef57f")},(error,tasks) => {
//     if(error){
//         console.log("Unable to fetch")
//     }
//     console.log(tasks)
// })

// db.collection('tasks').find({completed:true}).toArray((error,tasks) => {
//     if(error){
//         console.log("Unable to fetch")
//     }
//     console.log(tasks)
// })

////////////////////////////////////////UPDATE//////////////////////////////////////
// db.collection('users').updateOne({
//     _id: new ObjectID("5f4eca9c6c96fa2d0cdef57c")
// },{
//     $set: {
//         name:'Sudha'
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// ///////////////////////   updateMany ///////////////
// db.collection('tasks').updateMany({
//        completed: false   //you want to chane only those who have false values
// },{
//     $set : {
//         completed:true
//     }
// }).then((result) =>{
//     console.log(result.modifiedCount)
// }).catch((error) => {
//     console.log(error)
// })

/////////////////////////////////////////////////////delete//////////////////////////////
db.collection("tasks").deleteMany({
    description : "Type and practice on keys10 or type fast finger"
    //description : "Started the MongoDB folder"    //had no effect write only one


}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

db.collection('tasks').deleteOne({
    description : "Started REST APIs and Mongoose folder"

}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

})


