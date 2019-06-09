module.exports.menuTurma = function(app,req,res){
	res.redirect('/turma/listar');
}

module.exports.turma_formulario = function(app,req,res){
	res.render("turma/adicionar_turma");
}

module.exports.salvarTurma = function(app,req,res){
	var turma = req.body;
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.setTurma(turma, function(erro,result){
		res.redirect('/turma/listar');
	});
}

module.exports.listarTurmas = function(app,req,res){
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.listarTurmas(function(erro, result){
		res.render("turma/listar_turma", {turmas : result});
	});
}

module.exports.buscar = function(app,req,res){
	res.render("turma/buscar_turma");
}

module.exports.buscarTurma = function(app,req,res){
	var codigo_turma = req.body;
	console.log(codigo_turma);
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.getTurma(codigo_turma,function(erro, result){
		res.render("turma/listar_turmas",{turmas : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("turma/apagar_turma");
}

module.exports.apagarTurma = function(app,req,res){
	var codigo_turma = req.body;
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.deleteTurma(codigo_turma,function(erro,result){
		res.redirect('/turma/listar');
	});
}

/*module.exports.apagarturmaRA = function(app,req,res){
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.turmaDAO(connection);

	console.log(req.body);	
}*/


module.exports.editar = function(app,req,res){
	res.render("turma/buscar_editar_turma");
}

module.exports.editarTurma = function(app,req,res){
	var codigo_turma = req.body;
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.getTurma(codigo_turma,function(erro,result){
		res.render("turma/editar_turma", {turma : result});
	});
}

module.exports.updateTurma = function(app,req,res){
	var turma = req.body;
	var connection = app.config.dbConnection();
	var turmaDao = new app.app.models.TurmaDAO(connection);

	turmaDao.updateTurma(turma, function(erro,result){
		res.redirect('/turma/listar');
	});
}