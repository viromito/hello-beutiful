import {inject} from 'aurelia-framework'; 
import {DataBaseService} from 's/services/DataBaseService';

@inject(DataBaseService)
export class BaseController {

	constructor(dataBaseService) {
		this.dataBaseService = DataBaseService.$_;
	}
}