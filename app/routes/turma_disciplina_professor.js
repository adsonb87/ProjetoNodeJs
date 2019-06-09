module.exports = function (app) {
	
	app.get('/turma_disciplina_professor' ,function(req,res){
		app.app.controllers.turma_disciplina_professor.listarTurma_disciplina_professores(app,req,res);
	});

	app.get('/turma_disciplina_professor/formulario',function(req,res){
		app.app.controllers.turma_disciplina_professor.turma_disciplina_professor_formulario(app,req,res);
	});

	app.post('/turma_disciplina_professor/adicionar', function(req,res){
		app.app.controllers.turma_disciplina_professor.salvarTurma_disciplina_professor(app,req,res);
	});

	app.get('/turma_disciplina_professor/listar', function(req,res){
		app.app.controllers.turma_disciplina_professor.listarTurma_disciplina_professores(app,req,res);
	});

	app.get('/turma_disciplina_professor/buscar', function(req,res){
		app.app.controllers.turma_disciplina_professor.buscar(app,req,res);
	});

	app.post('/turma_disciplina_professor/buscarTurma_disciplina_professor', function(req,res){
		app.app.controllers.turma_disciplina_professor.buscarTurma_disciplina_professor(app,req,res);
	});

	app.get('/turma_disciplina_professor/apagar', function(req,res){
		app.app.controllers.turma_disciplina_professor.apagar(app,req,res);
	});

	app.post('/turma_disciplina_professor/apagarTurma_disciplina_professor', function(req,res){
		app.app.controllers.turma_disciplina_professor.apagarTurma_disciplina_professor(app,req,res);
	});

	app.get('/turma_disciplina_professor/editar', function(req,res){
		app.app.controllers.turma_disciplina_professor.editar(app,req,res);
	});

	app.post('/turma_disciplina_professor/editarTurma_disciplina_professor', function(req,res){
		app.app.controllers.turma_disciplina_professor.editarTurma_disciplina_professor(app,req,res);
	});

	app.post('/turma_disciplina_professor/updateTurma_disciplina_professor', function(req,res){
		app.app.controllers.turma_disciplina_professor.updateTurma_disciplina_professor(app,req,res);
	});
};