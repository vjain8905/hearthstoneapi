/**
 * CardsController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	create:function (req,res){
		return res.json({
			result:"you cannot create cards"
		});
	},

	update:function (req,res){
		return res.json({
			result:"you cannot update"
		});
	},

	destroy:function(req,res){
		return res.json({
			result:"you cant destroy"
		});
	},

	find:function(req,res) {
		Cards.find(function(err,cards) {
			return res.json(cards);
		});
	},

	count:function(req,res){
		Cards.count(function(err,num) {
			return res.json({
				result: num 
			})
		});
	},

	default: function(req,res) {
		Cards.find(function(err,cards) {
			return res.json(cards);
		});
	}
	
};
