/**
 * CardsController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	create:function (req,res){
		return res.json({
			status:"you cannot create cards"
		});
	},

	update:function (req,res){
		return res.json({
			status:"you cannot update"
		});
	},

	destroy:function(req,res){
		return res.json({
			status:"you cant destroy"
			});
	}
	
};
