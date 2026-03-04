const  getstudent = (req,res) =>{
    res.send("all students")
}
const  createstudent = (req,res) =>{
    res.send("create students")
}
const  updatestudent = (req,res) =>{
    res.send("uppdate studets")
}
const  deletestudent = (req,res) =>{
    res.send("delete students")
}
export {getstudent, createstudent, updatestudent, deletestudent}