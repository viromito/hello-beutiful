import {BaseController} from 's/base-controller';
import {customElement, bindable} from 'aurelia-framework';

@customElement('city-description')
export class CityDescriptionController extends BaseController{

	@bindable options;
	someAtataInfo = 'The City';
	
	deleteCity(){
		this.dataBaseService.deleteCity(this.options.city.id);
	}
}