import {BaseController} from 's/base-controller';
import {customElement, bindable} from 'aurelia-framework';

@customElement('country-description')
export class CountryDescriptionController {

	@bindable options;
	someAtataInfo = 'The Country';
	constructor() {
		//this.country = options.country;
		console.log('>> constructor' + this.options);
	}
	
	about(){
		console.log('>> about' + this.options);
	}
	
	attached(){
		console.log('>> attached' + this.options);
	}
}