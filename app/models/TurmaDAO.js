function TurmaDAO(connection) {
	this._connection = connection;
}

TurmaDAO.prototype.listarTurmas = function(callback) {
	this._connection.query('select * from turma', callback);
}

TurmaDAO.prototype.setTurma = function(turma, callback){
	this._connection.query('insert into turma set ?',turma,callback);
}

TurmaDAO.prototype.getTurma = function(codigo_turma, callback){
	this._connection.query('select * from turma where ?', codigo_turma, callback);
}

TurmaDAO.prototype.deleteTurma = function(codigo_turma, callback){
	this._connection.query('delete from turma where ?', codigo_turma, callback);
}

TurmaDAO.prototype.updateTurma = function(turma, callback){
	this._connection.query('update turma set ?', turma, callback);
}

module.exports = function(){
	return TurmaDAO;
}