import {BaseController} from 's/base-controller';

export class WorldPageController extends BaseController{

	someAtataInfo = 'The list of countries';
	constructor() {
		super();		
		this.someAtataInfo = this.someAtataInfo + ': ' + this.dataBaseService;
		this.countries = this.dataBaseService.getCountries();
	}
  
}