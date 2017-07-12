var mongoose = require('mongoose');

// cars schema

var carsSchema = mongoose.Schema({
	vin:{
		type: String
			
	},
	make:{
		type:String
		
	}, 
	model:{
		type:String
		
	},
	year:{
		type:Number
		
	},
	redlineRpm:{
		type:Number
		
	},
	maxFuelVolume:{
		type:Number
		
	},	
	 lastServiceDate:{
	 	type: Date
	 	
	 }
});

var Car = module.exports = mongoose.model('cars',carsSchema);

// get cars

module.exports.getCars = function(callback,limit){
		Car.find(callback).limit(limit);

}

/*module.exports.addCar = function(car, callback){
			
			Car.create(car, callback);
}*/

module.exports.updateCar = function(id, car, options, callback){
		
	var query = {vin: id};
	var update = {	
				
    make: car.make,
    model: car.model,
    year: car.year,
    redlineRpm: car.redlineRpm,
    maxFuelVolume: car.maxFuelVolume,
    lastServiceDate: car.lastServiceDate
 }
                           
		Car.findOneAndUpdate(query, update, options , callback);

		
}