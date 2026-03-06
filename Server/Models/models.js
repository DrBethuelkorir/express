        import mongoose, { Schema } from "mongoose";

        const movieschema = new mongoose.Schema({
            name : {type : String, required: true, trim : true},
            rating : {type:Number, required: true, max: 5, min: 1},
            likes : Number

        })
        
        const moviemodel = mongoose.model("movie", movieschema)

    // const insermany = async () =>{

    //     try {
    //     const movie1 = new moviemodel({
    //     name : "kiptoo",
    //     rating : 3,
    //     likes : 24
    // })
    //     const movie2 = new moviemodel({
    //     name : "Bethuel",
    //     rating : 4,
    //     likes : 26
    // })
    // const results = await moviemodel.insertMany([movie1,movie2])
    
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
       
    // export { insermany } 

    const alldata = async () =>{
        try {
            const all = await moviemodel.find().skip(1)
            console.log(all)
            
        } catch (error) {
            console.log(error)
        }
    }
    export {alldata}