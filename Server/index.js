import express from "express"
import students from './routers/student.js'
const app = express()
const port = 8000

app.use('/students',students)
app.listen(port, () =>{
    console.log("server up!")
})