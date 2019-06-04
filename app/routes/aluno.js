module.exports = function (app) {

	app.get('/aluno/formulario',function(req,res){
		app.app.controllers.aluno.aluno_formulario(app,req,res);
	});


	app.post('/aluno/adicionar', function (req,res) {
		app.app.controllers.aluno.salvarAluno(app,req,res);
	});
};