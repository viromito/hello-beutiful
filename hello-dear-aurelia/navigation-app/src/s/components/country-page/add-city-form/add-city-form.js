import {BaseController} from 's/base-controller';
import {customElement, bindable} from 'aurelia-framework';

@customElement('add-city-form')
export class AddCityFormController extends BaseController{

	@bindable options;
	someAtataInfo = 'The add-city-form';
	
	addCity(){
		this.dataBaseService.addCity(this.cityName, this.options.COUNTRY_ID, this.cityPopulation, this.cityDescription);
	}
}