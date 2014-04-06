/**
 * CardsController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	find: function(req,res) {
		Cards.find(function(err,cards) {
			return res.json(cards);
		});
	},

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


	type: function(req,res) {
		var type = req.param('type');

		Cards.find().where({ type: type}).exec(function(err,cards) {
			return res.json(cards);
		});
	},

	count: function(req,res){
		Cards.count(function(err,num) {
			return res.json({
				result: num 
			})
		});
	}
	
};
