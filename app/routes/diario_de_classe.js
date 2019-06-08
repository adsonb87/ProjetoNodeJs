module.exports = function (app) {
	app.get('/diariodeclasse' ,function(req,res){
		app.app.controllers.diario_de_classe.diarioDeClasse(app,req,res);
	});
};