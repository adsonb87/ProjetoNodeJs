module.exports = function (app) {

	app.get('/aluno/formulario',function(req,res){
		app.app.controllers.aluno.aluno_formulario(app,req,res);
	});

	app.post('/aluno/adicionar', function (req,res) {
		app.app.controllers.aluno.salvarAluno(app,req,res);
	});

	app.get('/aluno/listar', function(req,res){
		app.app.controllers.aluno.listarAlunos(app,req,res);
	});

	app.get('/aluno/buscar',function(req,res){
		app.app.controllers.aluno.buscar(app,req,res);
	});

	app.post('/aluno/buscarAluno',function(req,res){
		app.app.controllers.aluno.buscarAluno(app,req,res);
	});
	
	app.get('/aluno/apagar',function(req,res){
		app.app.controllers.aluno.apagar(app,req,res);
	});

	app.post('/aluno/apagarAluno',function(req,res){
		app.app.controllers.aluno.apagarAluno(app,req,res);
	});

	app.get('/aluno/apagarAluno/RA=?',function(req,res){
		app.app.controllers.aluno.apagarAlunoRA(app,req,res);
	});

	app.get('/aluno',function(req,res){
		app.app.controllers.aluno.menuAluno(app,req,res);
	});

	app.get('/aluno/editar',function(req,res){
		app.app.controllers.aluno.editar(app,req,res);
	});

	app.post('/aluno/editarAluno',function(req,res){
		app.app.controllers.aluno.editarAluno(app,req,res);
	});

	app.post('/aluno/updateAluno', function(req,res){
		app.app.controllers.aluno.updateAluno(app,req,res);
	});

};