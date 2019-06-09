module.exports.professor_formulario = function(app,req,res){
	res.redirect('/professor/listar');
}

module.exports.salvarProfessor = function (app, req, res) {
	var professor = req.body;
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.setProfessor(professor, function(error,result){
		res.redirect('/professor/listar');
	});
}

module.exports.listarProfessores = function(app,req,res){
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.listarProfessores(function(erro, result){
		res.render("professor/listar_professores", {professores : result});	
	});
}

module.exports.buscar = function(app,req,res){
	res.render("professor/buscar_professor");
}

module.exports.buscarProfessor = function(app,req,res){
	var matricula = req.body;
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.getAluno(matricula,function(erro, result){
		res.render("professor/listar_professores",{professores : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("professor/apagar_professor");
}

module.exports.apagarProfessor = function(app,req,res){
	var matricula = req.body;
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.deleteProfessor(matricula,function(erro,result){
		res.redirect('/professor/listar');
	});
}

module.exports.apagarProfessorMatricula = function(app,req,res){
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	console.log(req.body);
}

module.exports.menuProfessor = function(app,req,res){
	res.render("professor/home_professor");
}

module.exports.editar = function(app,req,res){
	res.render("professor/buscar_editar_professor");
}

module.exports.editarProfessor = function(app,req,res){
	var matricula = req.body;
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.getProfessor(matricula,function(erro,result){
		res.render("professor/editar_professor", {professor : result});
	});
}

module.exports.updateProfessor = function(app,req,res){
	var professor = req.body;
	var connection = app.config.dbConnection();
	var professorDao = new app.app.models.ProfessorDAO(connection);

	professorDao.updateProfessor(professor, function(erro,result){
		res.redirect('/professor/listar');
	});
}