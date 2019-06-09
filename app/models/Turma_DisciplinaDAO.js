function Turma_DisciplinaDAO(connection) {
	this._connection = connection;
}

Turma_DisciplinaDAO.prototype.listarDisciplinas = function(callback) {
	this._connection.query('select * from turma_disciplina', callback);
}

Turma_DisciplinaDAO.prototype.setDisciplina = function(turma_disciplina, callback){
	this._connection.query('insert into turma_disciplina set ?',turma_disciplina,callback);
}

Turma_DisciplinaDAO.prototype.getDisciplina = function(id_turma_disciplina, callback){
	this._connection.query('select * from turma_disciplina where ?', id_turma_disciplina, callback);
}

Turma_DisciplinaDAO.prototype.deleteDisciplina = function(id_turma_disciplina, callback){
	this._connection.query('delete from turma_disciplina where ?', id_turma_disciplina, callback);
}

Turma_DisciplinaDAO.prototype.updateDisciplina = function(turma_disciplina, callback){
	this._connection.query('update turma_disciplina set ?', turma_disciplina, callback);
}

module.exports = function(){
	return Turma_DisciplinaDAO;
}