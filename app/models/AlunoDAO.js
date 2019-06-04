function AlunoDAO(connection) {
	this._connection = connection;
}

AlunoDAO.prototype.getAluno = function(callback) {
	this._connection.query('Select * from aluno', callback);
}

AlunoDAO.prototype.setAluno = function(aluno,callback){
	console.log(aluno);
	this._connection.query('insert into aluno set ?',aluno,callback);
}

AlunoDAO.prototype.buscarAluno = function(RA, callback){
	this._connection.query('select * from aluno where ?', RA, callback);
}

module.exports = function(){
	return AlunoDAO;
}