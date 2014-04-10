/**
 * CardsController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


	create: function (req,res){
		return res.json({
			result:"You cannot create cards"
		});
	},

	update: function (req,res){
		return res.json({
			result:"You cannot update cards"
		});
	},

	destroy: function(req,res){
		return res.json({
			result:"You cant delete cards"
		});
	},

	count: function(req,res){
		Cards.count(function(err,num) {
			return res.json({
				result: num 
			})
		});
	},

	findAll: function(req,res) {
		Cards.find().exec(function(err,cards) {
			return res.json(cards);
		});
	},

	search: function(req,res) {
		var field = req.param('field');
		var value = req.param('value');
		var search = {};

		if(field === 'description' || field === 'name') {
			search[field] = {contains: value};
		} else {
			search[field] = value;
		}

		Cards.find().where(search).exec(function(err,cards) {
			return res.json(cards);
		});
	}
	
};
