module.exports.aluno_formulario = function(app,req,res){
	res.render("aluno/adicionar_aluno");
}

module.exports.salvarAluno = function (app, req, res) {
	var aluno = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.setAluno(aluno, function(error,result){
		res.redirect('/aluno/listar');
	});
}

module.exports.listarAlunos = function(app,req,res){
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.listarAlunos(function(erro, result){
		res.render("aluno/listar_alunos", {alunos : result});	
	});
}

module.exports.buscar = function(app,req,res){
	res.render("aluno/buscar_aluno");
}

module.exports.buscarAluno = function(app,req,res){
	var RA = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.getAluno(RA,function(erro, result){
		res.render("aluno/listar_alunos",{alunos : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("aluno/apagar_aluno");
}

module.exports.apagarAluno = function(app,req,res){
	var RA = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.deleteAluno(RA,function(erro,result){
		res.redirect('/aluno/listar');
	});
}

module.exports.menuAluno = function(app,req,res){
	res.render("aluno/home_aluno");
}

module.exports.editar = function(app,req,res){
	res.render("aluno/buscar_editar_aluno");
}

module.exports.editarAluno = function(app,req,res){
	var RA = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.getAluno(RA,function(erro,result){
		res.render("aluno/editar_aluno", {aluno : result});
	});
}

module.exports.updateAluno = function(app,req,res){
	var aluno = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.updateAluno(aluno, function(erro,result){
		res.redirect('/aluno/listar');
	});
}