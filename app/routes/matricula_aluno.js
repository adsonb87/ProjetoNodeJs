module.exports = function (app) {
	
	app.get('/matricula_aluno' ,function(req,res){
		app.app.controllers.matricula_aluno.listarMatricula_alunos(app,req,res);
	});

	app.get('/matricula_aluno/formulario',function(req,res){
		app.app.controllers.matricula_aluno.matricula_aluno_formulario(app,req,res);
	});

	app.post('/matricula_aluno/adicionar', function(req,res){
		app.app.controllers.matricula_aluno.salvarMatricula_aluno(app,req,res);
	});

	app.get('/matricula_aluno/listar', function(req,res){
		app.app.controllers.matricula_aluno.listarMatricula_alunos(app,req,res);
	});

	app.get('/matricula_aluno/buscar', function(req,res){
		app.app.controllers.matricula_aluno.buscar(app,req,res);
	});

	app.post('/matricula_aluno/buscarMatricula_aluno', function(req,res){
		app.app.controllers.matricula_aluno.buscarMatricula_aluno(app,req,res);
	});

	app.get('/matricula_aluno/apagar', function(req,res){
		app.app.controllers.matricula_aluno.apagar(app,req,res);
	});

	app.post('/matricula_aluno/apagarMatricula_aluno', function(req,res){
		app.app.controllers.matricula_aluno.apagarMatricula_aluno(app,req,res);
	});

	app.get('/matricula_aluno/editar', function(req,res){
		app.app.controllers.matricula_aluno.editar(app,req,res);
	});

	app.post('/matricula_aluno/editarMatricula_aluno', function(req,res){
		app.app.controllers.matricula_aluno.editarMatricula_aluno(app,req,res);
	});

	app.post('/matricula_aluno/updateMatricula_aluno', function(req,res){
		app.app.controllers.matricula_aluno.updateMatricula_aluno(app,req,res);
	});
};