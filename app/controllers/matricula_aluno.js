module.exports.menuMatricula_aluno = function(app,req,res){
	res.render("matricula_aluno/home_matricula_aluno");
}

module.exports.matricula_aluno_formulario = function(app,req,res){
	res.render("matricula_aluno/adicionar_matricula_aluno");
}

module.exports.salvarMatricula_aluno = function(app,req,res){
	var matricula_aluno = req.body;
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.setMatricula_aluno(matricula_aluno, function(erro,result){
		res.redirect('/matricula_aluno/listar');
	});
}

module.exports.listarMatricula_alunos = function(app,req,res){
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.listarMatricula_alunos(function(erro, result){
		res.render("matricula_aluno/listar_matricula_aluno", {matricula_alunos : result});
	});
}

module.exports.buscar = function(app,req,res){
	res.render("matricula_aluno/buscar_matricula_aluno");
}

module.exports.buscarMatricula_aluno = function(app,req,res){
	var id_turma_disciplina = req.body;
	console.log(id_turma_disciplina);
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.getMatricula_aluno(id_turma_disciplina,function(erro, result){
		res.render("matricula_aluno/listar_matricula_alunos",{matricula_alunos : result});
	});
}

module.exports.apagar = function(app,req,res){
	res.render("matricula_aluno/apagar_matricula_aluno");
}

module.exports.apagarMatricula_aluno = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.deleteMatricula_aluno(id_turma_disciplina,function(erro,result){
		res.redirect('/matricula_aluno/listar');
	});
}

/*module.exports.apagarmatricula_alunoRA = function(app,req,res){
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.matricula_alunoDAO(connection);

	console.log(req.body);	
}*/


module.exports.editar = function(app,req,res){
	res.render("matricula_aluno/buscar_editar_matricula_aluno");
}

module.exports.editarMatricula_aluno = function(app,req,res){
	var id_turma_disciplina = req.body;
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.getMatricula_aluno(id_turma_disciplina,function(erro,result){
		res.render("matricula_aluno/editar_matricula_aluno", {matricula_aluno : result});
	});
}

module.exports.updateMatricula_aluno = function(app,req,res){
	var matricula_aluno = req.body;
	var connection = app.config.dbConnection();
	var matricula_alunoDao = new app.app.models.Matricula_alunoDAO(connection);

	matricula_alunoDao.updateMatricula_aluno(matricula_aluno, function(erro,result){
		res.redirect('/matricula_aluno/listar');
	});
}