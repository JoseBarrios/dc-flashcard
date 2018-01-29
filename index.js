'use strict'

const ThingDataController = require('dc-thing');

class FlashcardDataController extends ThingDataController {

	constructor(model){
		model = model || {};
		super(model);

	}

	//IMMUTABLE
	get type() { return this.constructor.name }
	set type(value) { this.model.type = this.constructor.name}

}

module.exports = ThingDataController;
