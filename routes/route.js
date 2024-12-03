const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser"); // passing cookie between both end

const {testingRoute,saveinfo,sendinfo, deleteinfo} = require("../routecontroller/routefunction"); // importing routing functions
router.use(cookieParser());
router.use(express.json());

// **********************************************************************************************   TESTING ROUTE
router.get("/test", testingRoute);


router.post("/fetchdata", saveinfo);

router.get("/senddata", sendinfo);

router.delete("/deletedata", deleteinfo);

module.exports = router; //exporting to use in index.js