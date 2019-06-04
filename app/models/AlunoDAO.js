function AlunoDAO(connection) {
	this._connection = connection;
}

AlunoDAO.prototype.listarAlunos = function(callback) {
	this._connection.query('select * from aluno', callback);
}

AlunoDAO.prototype.setAluno = function(aluno, callback){
	this._connection.query('insert into aluno set ?',aluno,callback);
}

AlunoDAO.prototype.getAluno = function(RA, callback){
	this._connection.query('select * from aluno where ?', RA, callback);
}

AlunoDAO.prototype.deleteAluno = function(RA, callback){
	this._connection.query('delete from aluno where ?', RA, callback);
}

AlunoDAO.prototype.updateAluno = function(aluno, callback){
	this._connection.query('update aluno set ?', aluno, callback);
}

module.exports = function(){
	return AlunoDAO;
}