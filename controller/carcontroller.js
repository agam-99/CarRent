
const Carmodel=require("../model/carmodel.js");
const fs=require('fs');

module.exports.gethome= (req,res)=>{
let home=    fs.readFileSync("./static/index.html"); 
let home1=home+" ";

res.end(home1);
}
module.exports.getteam=(req,res)=>{
    let team=    fs.readFileSync("./static/team.html"); 
let team1=team+" ";

res.end(team1);
};
module.exports.getaboutus=(req,res)=>{
    let aboutus=    fs.readFileSync("./static/aboutus.html"); 
let aboutus1=aboutus+" ";

res.end(aboutus1);
};
module.exports.getcontact=(req,res)=>{
    let contactus=    fs.readFileSync("./static/contactus.html"); 
let contactus1=contactus+" ";

res.end(contactus1);
};

module.exports.getallcars= async (req,res)=>{
    var allcarpage2=fs.readFileSync('./templates/cars.html');
    var allcarpage=allcarpage2+" ";
    var carcard2= fs.readFileSync('./templates/car-card.html');
   var carcard=carcard2 +" ";
     try{
        var a=" "; 
      await Carmodel.find({}).then((result)=>{
        
        for(var i=0;i<result.length;i++)
      { console.log(result[i]);
         let carcard1=carcard.replace(/{%name%}/g,result[i]["Name"]);
        carcard1=carcard1.replace(/{%price%}/g,result[i]["Rent"]);
        carcard1=carcard1.replace(/{%img1%}/g,result[i]["img1"]);
        carcard1=carcard1.replace(/{%time%}/g,result[i]["Mph060"]);
        
        carcard1=carcard1.replace(/{%topspeed%}/g,result[i]["TopSpeed"]);
        
       
        carcard1=carcard1.replace(/{%minidesc%}/g,result[i]["minidescription"]);
        carcard1=carcard1.replace(/{%airbags%}/g,result[i]["Airbags"]);
        if(result[i]["Rating"]<5&&result[i]["Rating"]>=4)
        {
        carcard1=carcard1.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star unmark"></i>');
    }
    else if(result[i]["Rating"]<4&&result[i]["Rating"]>=3)
    {
    carcard1=carcard1.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i>');
}   
else if(result[i]["Rating"]==5)
{
carcard1=carcard1.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i>');
}
else
{
carcard1=carcard1.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i>');
} 
carcard1=carcard1.replace(/{%id%}/g,result[i]["_id"]);
console.log(carcard1);
a = a+carcard1;

      }

      allcarpage1=allcarpage.replace(/{%car-templates%}/g,a);
    res.end(allcarpage1);  
    });
    
        
  res.end(allcarpage);
    }
    catch(err)
    {
        console.error(err);
    }




    }
    module.exports.getcardetails=(req,res)=>{
        let carinfo2=fs.readFileSync('./templates/each-car-template.html');
        let carinfo=carinfo2+ ' ';
        let id=req.params["id"];
        Carmodel.findById(id).then((result)=>{
           carinfo=carinfo.replace(/{%name%}/g,result["Name"]);
            carinfo=carinfo.replace(/{%price%}/g,result["Rent"]);
            carinfo=carinfo.replace(/{%bodytype%}/g,result["Bodytype"]);
            carinfo=carinfo.replace(/{%time%}/g,result["Mph060"]);
            carinfo=carinfo.replace(/{%year%}/g,result["Year"]);
            carinfo=carinfo.replace(/{%topspeed%}/g,result["TopSpeed"]);
            carinfo=carinfo.replace(/{%transmission%}/g,result["Transmission"]);
            carinfo=carinfo.replace(/{%displacement%}/g,result["Displacement"]);
            carinfo=carinfo.replace(/{%description%}/g,result["Description"]);
            carinfo=carinfo.replace(/{%airbags%}/g,result["Airbags"]);
            carinfo=carinfo.replace(/{%img2%}/g,result[i]["img2"]);
            carinfo=carinfo.replace(/{%img3%}/g,result[i]["img3"]);
            carinfo=carinfo.replace(/{%img4%}/g,result[i]["img4"]);
            if(result["Rating"]<5&&result["Rating"]>=4)
            {
            carinfo=carinfo.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
        }
        else if(result["Rating"]<4&&result["Rating"]>=3)
        {
        carinfo=carinfo.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    }   
    else if(result["Rating"]==5)
    {
    carinfo=carinfo.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
}
else
{
    carinfo=carinfo.replace(/{%rating%}/g,'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i><i class="fa fa-star unmark"></i>');
}
 
            if(result["ABS"])
            {
            carinfo=carinfo.replace(/{%abs%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo1.replace(/{%abs%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["CruiseControl"])
            {
            carinfo=carinfo.replace(/{%cruisecontrol%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo.replace(/{%cruisecontrol%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["ClimateControl"])
            {
            carinfo=carinfo.replace(/{%climatecontrol%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo1.replace(/{%climatecontrol%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["AlloyWheels"])
            {
            carinfo=carinfo.replace(/{%alloy%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo.replace(/{%alloy%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["PaddleShift"])
            {
            carinfo=carinfo.replace(/{%paddle%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo.replace(/{%paddle%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["SteeringMountedControls"])
            {
            carinfo=carinfo.replace(/{%steeringmounts%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo1.replace(/{%steeringmounts%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["Ways6AdjustSeats"])
            {
            carinfo=carinfo.replace(/{%seats%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo.replace(/{%seats%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }
            if(result["Sunroof"])
            {
            carinfo=carinfo.replace(/{%sunroof%}/g,' <i class="fas fa-2x fa-check"></i> ');
            }
            else{
                carinfo=carinfo.replace(/{%sunroof%}/g,'<i class="fas fa-2x fa-times"></i> ');
            }

           
       res.end(carinfo);
                 



        })
        .catch((err)=>{
      console.error(err);})
    };
    module.exports.addcar = async (req,res)=>{
         try{
           
        var result= await Carmodel.create(req.body);
       res.status(201).json({
         result:result
       })
      }
      catch(err)
      {
        console.error(err);
     
      } 

    };
    module.exports.updatecar=(req,res)=>{};    
    module.exports.removecar=(req,res)=>{};