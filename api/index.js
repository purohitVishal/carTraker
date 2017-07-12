var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');	

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

Car = require('./models/cars');
Reading = require('./models/readings');
app.use(cors());


// connect to mongoose
mongoose.connect('mongodb://localhost/cartraker');
var db = mongoose.connection;

app.get('/',function(req,res,next){
	res.send('hello world');
});

app.get('/api/cars',function(req,res,next){
	Car.getCars(function(err,cars){
		if(err){
			throw err;
		}
		res.json(cars);
	})
});

app.put('/vehicles',function(req,res,next){
	  /*var vinid = req.params.vin;*/ 
	 var car = req.body;
console.log(car);
var count = car.length;
console.log(count);
for(var i=0;i<count;i++){
	Car.updateCar(car[i].vin, car[i], {upsert:true}, function(err,car){
			if(err){
			throw err;
		}
		if(i==(count-1)){
			
		res.json(car);}
	});}

});

/*app.post('/api/cars/add',function(req,res,next){
	  
	 var car = req.body;


	Car.addCar(car,function(err,car){
		if(err){
			throw err;
		}
		res.json(car);
	});

});*/
app.post('/readings',function(req,res,next){
	
	var reading = req.body;
	
	
	
	Reading.addReading(reading,function(err,reading){
		if(err){
			throw err;
		}
		res.json(reading);
	});

	 


});



app.listen(3000);
console.log('running on port 3000');