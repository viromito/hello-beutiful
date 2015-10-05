import {BaseController} from 's/base-controller';

export class CityPageController extends BaseController{

	someAtataInfo = 'The list of cities';
	constructor() {
		super();		
		this.someAtataInfo = this.someAtataInfo + ': ' + this.dataBaseService;
		
	}
  
	activate(params, routeConfig, navigationInstruction){
		this.city = this.dataBaseService.getCity(params.id);
	}
}