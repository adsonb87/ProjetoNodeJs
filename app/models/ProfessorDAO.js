function ProfessorDAO(connection) {
	this._connection = connection;
}

ProfessorDAO.prototype.listarProfessores = function(callback) {
	this._connection.query('select * from professor', callback);
}

ProfessorDAO.prototype.setProfessor = function(professor, callback){
	this._connection.query('insert into professor set ?',professor,callback);
}

ProfessorDAO.prototype.getProfessor = function(matricula, callback){
	this._connection.query('select * from professor where ?', matricula, callback);
}

ProfessorDAO.prototype.deleteProfessor = function(matricula, callback){
	this._connection.query('delete from professor where ?', matricula, callback);
}

ProfessorDAO.prototype.updateProfessor = function(professor, callback){
	this._connection.query('update professor set ?', professor, callback);
}

module.exports = function(){
	return ProfessorDAO;
}