module.exports = function (app) {
	
	app.get('/turma' ,function(req,res){
		app.app.controllers.turma.listarTurmas(app,req,res);
	});

	app.get('/turma/formulario',function(req,res){
		app.app.controllers.turma.turma_formulario(app,req,res);
	});

	app.post('/turma/adicionar', function(req,res){
		app.app.controllers.turma.salvarTurma(app,req,res);
	});

	app.get('/turma/listar', function(req,res){
		app.app.controllers.turma.listarTurmas(app,req,res);
	});

	app.get('/turma/buscar', function(req,res){
		app.app.controllers.turma.buscar(app,req,res);
	});

	app.post('/turma/buscarTurma', function(req,res){
		app.app.controllers.turma.buscarTurma(app,req,res);
	});

	app.get('/turma/apagar', function(req,res){
		app.app.controllers.turma.apagar(app,req,res);
	});

	app.post('/turma/apagarTurma', function(req,res){
		app.app.controllers.turma.apagarTurma(app,req,res);
	});

	app.get('/turma/editar', function(req,res){
		app.app.controllers.turma.editar(app,req,res);
	});

	app.post('/turma/editarTurma', function(req,res){
		app.app.controllers.turma.editarTurma(app,req,res);
	});

	app.post('/turma/updateTurma', function(req,res){
		app.app.controllers.turma.updateTurma(app,req,res);
	});
};