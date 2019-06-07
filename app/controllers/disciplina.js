module.exports.menuDisciplina = function(app,req,res){
	res.render("disciplina/home_disciplina");
}

module.exports.disciplina_formulario = function(app,req,res){
	res.render("disciplina/adicionar_disciplina");
}

module.exports.salvarDisciplina = function(app,req,res){
	var disciplina = req.body;
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.setDisciplina(disciplina, function(erro,result){
		res.redirect('/disciplina/listar');
	});
}

module.exports.listarDisciplina = function(app,req,res){
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.listarDisciplina(disciplina, function(erro, result){
		res.render("disciplina/listar_disciplinas", {disciplinas : result});
	});
}

module.exports.buscar = function(app,req,res){
	res.render("disciplina/buscar_disciplina");
}

module.exports.buscarDisciplina = function(app,req,res){
	var codigo_disciplina = req.body;
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.getDisciplina(codigo_disciplina,function(erro, result){
		res.render("disciplina/listar_disciplinas",{disciplinas : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("disciplina/apagar_disciplina");
}

module.exports.apagarDisciplina = function(app,req,res){
	var codigo_disciplina = req.body;
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.deleteDisciplina(codigo_disciplina,function(erro,result){
		res.redirect('/disciplina/listar');
	});
}

/*module.exports.apagardisciplinaRA = function(app,req,res){
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.disciplinaDAO(connection);

	console.log(req.body);	
}*/


module.exports.editar = function(app,req,res){
	res.render("disciplina/buscar_editar_disciplina");
}

module.exports.editarDisciplina = function(app,req,res){
	var codigo_disciplina = req.body;
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.getDisciplina(codigo_disciplina,function(erro,result){
		res.render("disciplina/editar_disciplina", {disciplina : result});
	});
}

module.exports.updateDisciplina = function(app,req,res){
	var disciplina = req.body;
	var connection = app.config.dbConnection();
	var disciplinaDao = new app.app.models.DisciplinaDAO(connection);

	disciplinaDao.updateDisciplina(disciplina, function(erro,result){
		res.redirect('/disciplina/listar');
	});
}