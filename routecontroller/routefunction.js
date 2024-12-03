const Job = require("../db_modals/jobSchema");

// Routes function used in route
exports.testingRoute = async (req, res) => {
    res.send("Testing Route");

}

exports.saveinfo = async (req, res) => {
    const { job_title, company_name, location, apply_data, email, number, statuss } = req.body
    console.log(job_title, company_name, location, apply_data, email, number, statuss)
    try {
        const sendinfo = new Job({ job_title, company_name, location, apply_data, email, number, statuss })
        const saveinfo = await sendinfo.save()
        if (!saveinfo) {
            console.log("Cant save.")
            return res.json({ success: false, error: "Job info cant be saved" })
        }
        console.log("Job Info save.")
        return res.json({ success: true, message: "Job info saved" })

    }
    catch (error) {
        console.log(error)
    }

    // res.send("Testing Route");
}

exports.sendinfo = async (req, res) => {
    try {
        const fetch_info = await Job.find()
        if (!fetch_info) {
            console.log("Cant fetch.")
            res.json({ success: false, error: "Job info cant be fetched" })
        }
        console.log("Info fetched.")
        res.json({ success: true, message: "Job info fetched", fetch_info })

    }
    catch (error) {
        console.log(error)
        // res.send("Testing Route");
    }
}

exports.deleteinfo = async (req, res) => {
    const {id} = req.body
    console.log("Id to delete", id)
    try {
        const delete_info = await Job.findOneAndDelete({_id : id})
        if (!delete_info) {
            console.log("Cant delete info.")
            res.json({ success: false, error: "Job info cant be deleted" })
        }
        console.log("Info Deleted.")
        res.status(200).json({ success: true, message: "Job info deleted", delete_info })

    }
    catch (error) {
        console.log(error)
        // res.send("Testing Route");
    }
}

