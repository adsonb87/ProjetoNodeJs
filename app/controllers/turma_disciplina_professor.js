module.exports.menuTurma_disciplina_professor = function(app,req,res){
	res.render("turma_disciplina_professor/home_turma_disciplina_professor");
}

module.exports.turma_disciplina_professor_formulario = function(app,req,res){
	res.render("turma_disciplina_professor/adicionar_turma_disciplina_professor");
}

module.exports.salvarTurma_disciplina_professor = function(app,req,res){
	var turma_disciplina_professor = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.setTurma_disciplina_professor(turma_disciplina_professor, function(erro,result){
		res.redirect('/turma_disciplina_professor/listar');
	});
}

module.exports.listarTurma_disciplina_professores = function(app,req,res){
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.listarTurma_disciplina_professores(function(erro, result){
		res.render("turma_disciplina_professor/listar_turma_disciplina_professor", {turma_disciplina_professores : result});
	});
}

module.exports.buscar = function(app,req,res){
	res.render("turma_disciplina_professor/buscar_turma_disciplina_professor");
}

module.exports.buscarTurma_disciplina_professor = function(app,req,res){
	var id_turma_disciplina = req.body;
	console.log(id_turma_disciplina);
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.getTurma_disciplina_professor(id_turma_disciplina,function(erro, result){
		res.render("turma_disciplina_professor/listar_turma_disciplina_professores",{turma_disciplina_professores : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("turma_disciplina_professor/apagar_turma_disciplina_professor");
}

module.exports.apagarTurma_disciplina_professor = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.deleteTurma_disciplina_professor(id_turma_disciplina,function(erro,result){
		res.redirect('/turma_disciplina_professor/listar');
	});
}

/*module.exports.apagarturma_disciplina_professorRA = function(app,req,res){
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.turma_disciplina_professorDAO(connection);

	console.log(req.body);	
}*/


module.exports.editar = function(app,req,res){
	res.render("turma_disciplina_professor/buscar_editar_turma_disciplina_professor");
}

module.exports.editarTurma_disciplina_professor = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.getTurma_disciplina_professor(id_turma_disciplina,function(erro,result){
		res.render("turma_disciplina_professor/editar_turma_disciplina_professor", {turma_disciplina_professor : result});
	});
}

module.exports.updateTurma_disciplina_professor = function(app,req,res){
	var turma_disciplina_professor = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplina_professorDao = new app.app.models.Turma_disciplina_professorDAO(connection);

	turma_disciplina_professorDao.updateTurma_disciplina_professor(turma_disciplina_professor, function(erro,result){
		res.redirect('/turma_disciplina_professor/listar');
	});
}