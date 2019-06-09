function Turma_disciplinaDAO(connection) {
	this._connection = connection;
}

Turma_disciplinaDAO.prototype.listarTurma_disciplinas = function(callback) {
	this._connection.query('select * from turma_disciplina', callback);
}

Turma_disciplinaDAO.prototype.setTurma_disciplina = function(turma_disciplina, callback){
	this._connection.query('insert into turma_disciplina set ?',turma_disciplina,callback);
}

Turma_disciplinaDAO.prototype.getTurma_disciplina = function(id_turma_disciplina, callback){
	this._connection.query('select * from turma_disciplina where ?', id_turma_disciplina, callback);
}

Turma_disciplinaDAO.prototype.deleteTurma_disciplina = function(id_turma_disciplina, callback){
	this._connection.query('delete from turma_disciplina where ?', id_turma_disciplina, callback);
}

Turma_disciplinaDAO.prototype.updateTurma_disciplina = function(turma_disciplina, callback){
	this._connection.query('update turma_disciplina set ?', turma_disciplina, callback);
}

module.exports = function(){
	return Turma_disciplinaDAO;
}