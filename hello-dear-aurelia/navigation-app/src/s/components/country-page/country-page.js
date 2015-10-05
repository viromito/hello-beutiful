import {BaseController} from 's/base-controller';

export class CountryPageController extends BaseController{

	someAtataInfo = 'You are awsome))';
	constructor() {
		super();		
		this.someAtataInfo = this.someAtataInfo + ': ' + this.dataBaseService;
		
	}
	
	activate(params, routeConfig, navigationInstruction){
		this.country = this.dataBaseService.getCountries()[params.id];
		this.COUNTRY_ID = params.id;
	}
}