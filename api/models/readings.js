var mongoose = require('mongoose');

Car = require('./cars');



//readings schema

var readingsSchema = mongoose.Schema({
	vin:{
		type: String
	},	
   latitude:{
   	type: Number
   },
   longitude:{
   	type: Number
   },
   timestamp:{
   	type:Date
   },
   fuelVolume : {
   	type:Number
   },
   speed:{
   	type:Number
   },
   engineHp:{
   	type:Number
   },
   checkEngineLightOn:{
   	type:Boolean
   },
   engineCoolantLow:{
   	type:Boolean
   },
   cruiseControlOn:{
   	type:Boolean
   },
   engineRpm: {
   	type:Number
   },
   tires: {
      frontLeft:{
      	type:Number
      },
      frontRight:{
      	type:Number
      },
      rearLeft:{
      	type:Number
      },
      rearRight:{
      	type:Number
      }
   }
});
var Reading = module.exports = mongoose.model('readings',readingsSchema);
var redlinerpm
module.exports.addReading = function(reading, callback){
			var i=0; var engineRpmReading; var carfromdb, fuelVolumeReading, engineCoolantLowReading, checkEngineLightOnReading;
         for(var keyz in reading){
            item = reading[keyz];
            console.log(i+" "+ keyz +" "+item);
            i++;
            if (keyz=='vin'){
               vinVar = reading[keyz];
               console.log("this is vin "+vinVar);
            }
            if(keyz=='engineRpm'){
               engineRpmReading = reading[keyz];
               console.log("enginerpm is "+engineRpmReading);
            }
            if(keyz=='fuelVolume'){
               fuelVolumeReading = reading[keyz];
               console.log("reading of fule Volume is "+fuelVolumeReading);
            }
            if(keyz=='checkEngineLightOn'){
               checkEngineLightOnReading = reading[keyz];
            }
            if(keyz=='engineCoolantLow'){
               engineCoolantLowReading = reading[keyz];
            }
            if(checkEngineLightOnReading===true||engineCoolantLowReading===true){
               console.log("checkEngineLightOnReading is "+checkEngineLightOnReading+" engineCoolantLowReading is "+engineCoolantLowReading);
            }
            if(reading.tires.frontLeft<32||reading.tires.frontLeft>36){
               console.log("this is the tirepressure... of frontLeft................. "+reading.tires.frontLeft+" priority:low");
            }
            if(reading.tires.frontRight<32||reading.tires.frontRight>36){
               console.log("this is the tirepressure...of frontRight................. "+reading.tires.frontRight+" priority:low");
            }
            if(reading.tires.rearRight<32||reading.tires.rearRight>36){
               console.log("this is the tirepressure...of rearRight................. "+reading.tires.rearRight+" priority:low");
            }

            if(reading.tires.rearLeft<32||reading.tires.rearLeft>36){
               console.log("this is the tirepressure...of rearLeft................. "+reading.tires.rearLeft+" priority:low");
            }

            Car.findOne({vin:vinVar},function(err,result){
               if(err){
                  console.log("cannot fetch data from cars collection");
               }
               else{
                  carfromdb = result;
                  console.log(carfromdb);
                   }
                   console.log("this is redlineRpm "+result.redlineRpm);
            if(engineRpmReading>carfromdb.redlineRpm){
               console.log("enginerpm is greater than redlinerpm hence pripority:high "+"engineRPM "+engineRpmReading+"redlineRpm "+carfromdb.redlineRpm);
            }
            if(fuelVolumeReading<(carfromdb.maxFuelVolume*0.01)){
               console.log("fuelVolumeReading "+fuelVolumeReading+"is less than maxFuelVolume threshold "+carfromdb.maxFuelVolume*0.01+"priority:medium");
            }

            })

            

         }
		 

      }