export class DataBaseService {
	constructor(){
		if(!DataBaseService.$_){
			DataBaseService.$_ = new _DataBaseService();
		}
	}
}

function _DataBaseService(){
	
	var countries, lastCityId = 3;
	
	this.getCountries = function(){
		return countries;
	};
	this.getCity = function(cityId){
		for(var i = 0; i < countries.length; i++){
			for(var j = 0; j < countries[i].cities.length; j++){
				if(countries[i].cities[j].id == cityId){
					return countries[i].cities[j];
				}
			}
		}
	};
	this.addCity = function(name, countryId, population, description){
		var newCity = {
				name: name,
				population: population,
				description: description,
				id: lastCityId + 1
			};
			
		countries[countryId].cities.push(newCity);
		lastCityId++;
	};
	this.deleteCity = function(cityId){
		for(var i = 0; i < countries.length; i++){
			for(var j = 0; j < countries[i].cities.length; j++){
				if(countries[i].cities[j] && countries[i].cities[j].id == cityId){
					delete countries[i].cities[j];
				}
			}
		}
	};
	
	constructor(this);
	
	function constructor(thisService){
		if(!countries){
			countries = generateCountries();
		}
		
		function generateCountries(){
			return [{
				name: 'USA!',
				id: 0,
				cities: [{
					name: 'NY',
					population: 100500,
					id: 0
				},{
					name: 'LA',
					population: 100500,
					id: 1
				}]
			},{
				name: 'Ukraine',
				id: 1,
				cities: [{
					name: 'Kyiv',
					population: 100500,
					id: 2
				},{
					name: 'Lviv',
					population: 100500,
					id: 3
				}]
			}];
		}
	}
}