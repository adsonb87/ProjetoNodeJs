function Turma_disciplina_professorDAO(connection) {
	this._connection = connection;
}

Turma_disciplina_professorDAO.prototype.listarTurma_disciplina_professores = function(callback) {
	this._connection.query('select * from turma_disciplina_professor', callback);
}

Turma_disciplina_professorDAO.prototype.setTurma_disciplina_professor = function(turma_disciplina_professor, callback){
	this._connection.query('insert into turma_disciplina_professor set ?',turma_disciplina_professor,callback);
}

Turma_disciplina_professorDAO.prototype.getTurma_disciplina_professor = function(id_turma_disciplina_professor, callback){
	this._connection.query('select * from turma_disciplina_professor where ?', id_turma_disciplina_professor, callback);
}

Turma_disciplina_professorDAO.prototype.deleteTurma_disciplina_professor = function(id_turma_disciplina_professor, callback){
	this._connection.query('delete from turma_disciplina_professor where ?', id_turma_disciplina_professor, callback);
}

Turma_disciplina_professorDAO.prototype.updateTurma_disciplina_professor = function(turma_disciplina_professor, callback){
	this._connection.query('update turma_disciplina_professor set ?', turma_disciplina_professor, callback);
}

module.exports = function(){
	return Turma_disciplina_professorDAO;
}