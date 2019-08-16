const express = require("express");
let carRouter = express.Router();
// let obj=require("../controller/plancontroller");
// let createPlan=obj.createPlan();
// createPlan();
let {gethome,getteam,getaboutus,getcontact,getallcars,getcardetails,addcar,updatecar,removecar
 
} = require("../controller/carcontroller.js");
carRouter
.route('/home')
.get(gethome);
carRouter
.route('/team')
.get(getteam);
carRouter
.route('/about-us')
.get(getaboutus);
carRouter
.route('/contact-us')
.get(getcontact);
carRouter
.route('/car-catalogue')
.get(getallcars);
carRouter
.route('/:id')
.get(getcardetails);
carRouter
.route('/add')
.post(addcar);
carRouter
.route('/update')
.patch(updatecar);
carRouter
.route('/delete')
.delete(removecar);
module.exports=carRouter;