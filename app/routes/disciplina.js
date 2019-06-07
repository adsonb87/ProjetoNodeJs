module.exports´= function (app) {
	
	app.get('/disciplina/' ,function(req,res){
		app.app.controllers.disciplina.menuDisciplina(app,req,res);
	});

	app.get('/disciplina/formulario',function(req,res){
		app.app.controllers.disciplina.disciplina_formulario(app,req,res);
	});

	app.post('/disciplina/adicionar', function(req,res){
		app.app.controllers.disciplina.salvarDisciplina(app,req,res);
	});

	app.get('/disciplina/listar', function(req,res){
		app.app.controllers.disciplina.listarDisciplina(app,req,res);
	});

	app.get('/disciplina/buscar', function(req,res){
		app.app.controllers.disciplina.buscar(app,req,res);
	});

	app.post('/disciplina/buscarDisciplina', function(req,res){
		app.app.controllers.disciplina.buscarDisciplina(app,req,res);
	});

	app.get('/disciplina/apagar', function(req,res){
		app.app.controllers.disciplina.apagar(app,req,res);
	});

	app.post('/discpiplina/apagarDisciplina', function(req,res){
		app.app.controllers.disciplina.apagarDisciplina(app,req,res);
	});

	app.get('/discpiplina/editar', function(req,res){
		app.app.controllers.disciplina.editar(app,req,res);
	});

	app.post('/discpiplina/editarDisciplina', function(req,res){
		app.app.controllers.disciplina.editarDisciplina(app,req,res);
	});

	app.post('/discpiplina/updateDisciplina', function(req,res){
		app.app.controllers.disciplina.updateDisciplina(app,req,res);
	});
};