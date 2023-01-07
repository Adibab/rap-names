const { response } = require("express")
const express = require ("express")
const app = express()
const PORT = 8000

// const rappers = {
//   "21 savage": {
//     age: 03,
//     name: "Eru",
//     birthLocation: "st Marry",
//   },
//   "chance the rapper": {
//     age: 04,
//     name: "beru",
//     birthLocation: "Royal ifrimary",
//   },
//   dylan: {
//     age: 05,
//     name: "dylan",
//     birthLocation: "dylan",
//   },
// };
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:rapperName", (request, response)=> {
   const rapperName =request.params.rapperName.toLowerCase()
   if( rappers[rapperName]){
    response.json(rappers[rapperName])
   }else{

   
    // response.json(rappers)
    response.json(rappers["dylan"])
   }

})


app.listen(PORT, ()=> {
    console.log(`the server is running on  ${PORT}`)
})