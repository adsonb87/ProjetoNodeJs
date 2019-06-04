module.exports.aluno_formulario = function(app,req,res){
	res.render("aluno/adicionar_aluno");
}


module.exports.salvarAluno = function (app, req, res) {
	var aluno = req.body;
	var connection = app.config.dbConnection();
	var alunoDao = new app.app.models.AlunoDAO(connection);

	alunoDao.setAluno(aluno, function(error,result){
		res.send(aluno);
	});

}