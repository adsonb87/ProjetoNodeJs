module.exports.menuTurma_disciplina = function(app,req,res){
	res.render("turma_disciplina/home_turma_disciplina");
}

module.exports.turma_disciplina_formulario = function(app,req,res){
	res.render("turma_disciplina/adicionar_turma_disciplina");
}

module.exports.salvarTurma_disciplina = function(app,req,res){
	var turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.setTurma_disciplina(turma_disciplina, function(erro,result){
		res.redirect('/turma_disciplina/listar');
	});
}

module.exports.listarTurma_disciplinas = function(app,req,res){
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.listarTurma_disciplinas(function(erro, result){
		res.render("turma_disciplina/listar_turma_disciplina", {turma_disciplinas : result});
	});
}

module.exports.buscar = function(app,req,res){
	res.render("turma_disciplina/buscar_turma_disciplina");
}

module.exports.buscarTurma_disciplina = function(app,req,res){
	var id_turma_disciplina = req.body;
	console.log(id_turma_disciplina);
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.getTurma_disciplina(id_turma_disciplina,function(erro, result){
		res.render("turma_disciplina/listar_turma_disciplinas",{turma_disciplinas : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("turma_disciplina/apagar_turma_disciplina");
}

module.exports.apagarTurma_disciplina = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.deleteTurma_disciplina(id_turma_disciplina,function(erro,result){
		res.redirect('/turma_disciplina/listar');
	});
}

/*module.exports.apagarturma_disciplinaRA = function(app,req,res){
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.turma_disciplinaDAO(connection);

	console.log(req.body);	
}*/


module.exports.editar = function(app,req,res){
	res.render("turma_disciplina/buscar_editar_turma_disciplina");
}

module.exports.editarTurma_disciplina = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.getTurma_disciplina(id_turma_disciplina,function(erro,result){
		res.render("turma_disciplina/editar_turma_disciplina", {turma_disciplina : result});
	});
}

module.exports.updateTurma_disciplina = function(app,req,res){
	var turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var turma_disciplinaDao = new app.app.models.Turma_disciplinaDAO(connection);

	turma_disciplinaDao.updateTurma_disciplina(turma_disciplina, function(erro,result){
		res.redirect('/turma_disciplina/listar');
	});
}