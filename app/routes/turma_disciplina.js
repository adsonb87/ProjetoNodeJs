module.exports = function (app) {
	
	app.get('/turma_disciplina' ,function(req,res){
		app.app.controllers.turma_disciplina.listarTurma_disciplinas(app,req,res);
	});

	app.get('/turma_disciplina/formulario',function(req,res){
		app.app.controllers.turma_disciplina.turma_disciplina_formulario(app,req,res);
	});

	app.post('/turma_disciplina/adicionar', function(req,res){
		app.app.controllers.turma_disciplina.salvarTurma_disciplina(app,req,res);
	});

	app.get('/turma_disciplina/listar', function(req,res){
		app.app.controllers.turma_disciplina.listarTurma_disciplinas(app,req,res);
	});

	app.get('/turma_disciplina/buscar', function(req,res){
		app.app.controllers.turma_disciplina.buscar(app,req,res);
	});

	app.post('/turma_disciplina/buscarTurma_disciplina', function(req,res){
		app.app.controllers.turma_disciplina.buscarTurma_disciplina(app,req,res);
	});

	app.get('/turma_disciplina/apagar', function(req,res){
		app.app.controllers.turma_disciplina.apagar(app,req,res);
	});

	app.post('/turma_disciplina/apagarTurma_disciplina', function(req,res){
		app.app.controllers.turma_disciplina.apagarTurma_disciplina(app,req,res);
	});

	app.get('/turma_disciplina/editar', function(req,res){
		app.app.controllers.turma_disciplina.editar(app,req,res);
	});

	app.post('/turma_disciplina/editarTurma_disciplina', function(req,res){
		app.app.controllers.turma_disciplina.editarTurma_disciplina(app,req,res);
	});

	app.post('/turma_disciplina/updateTurma_disciplina', function(req,res){
		app.app.controllers.turma_disciplina.updateTurma_disciplina(app,req,res);
	});
};