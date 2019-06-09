module.exports = function (app) {

	app.get('/professor/formulario',function(req,res){
		app.app.controllers.professor.professor_formulario(app,req,res);
	});

	app.post('/professor/adicionar', function (req,res) {
		app.app.controllers.professor.salvarProfessor(app,req,res);
	});

	app.get('/professor/listar', function(req,res){
		app.app.controllers.professor.listarProfessores(app,req,res);
	});

	app.get('/professor/buscar',function(req,res){
		app.app.controllers.professor.buscar(app,req,res);
	});

	app.post('/professor/buscarProfessor',function(req,res){
		app.app.controllers.professor.buscarProfessor(app,req,res);
	});
	
	app.get('/professor/apagar',function(req,res){
		app.app.controllers.professor.apagar(app,req,res);
	});

	app.post('/professor/apagarProfessor',function(req,res){
		app.app.controllers.professor.apagarProfessor(app,req,res);
	});

	app.get('/professor/apagarProfessor/RA=?',function(req,res){
		app.app.controllers.professor.apagarProfessorMatricula(app,req,res);
	});

	app.get('/professor',function(req,res){
		app.app.controllers.professor.menuProfessor(app,req,res);
	});

	app.get('/professor/editar',function(req,res){
		app.app.controllers.professor.editar(app,req,res);
	});

	app.post('/professor/editarProfessor',function(req,res){
		app.app.controllers.professor.editarProfessor(app,req,res);
	});

	app.post('/professor/updateProfessor', function(req,res){
		app.app.controllers.professor.updateProfessor(app,req,res);
	});

};