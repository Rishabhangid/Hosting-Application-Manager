const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    job_title:{type:String , required:true},
    company_name:{type:String , required:true},
    location:{type:String , required:true},
    apply_data:{type:String , required:true},
    email:{type:String , required:true}, 
    number:{type:String , required:true},
    statuss:{type:String , required:true}
})

const Job = mongoose.model("Job", jobSchema)
module.exports = Job