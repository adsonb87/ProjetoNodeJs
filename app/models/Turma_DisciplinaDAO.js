function Turma_disciplinaDAO(connection) {
	this._connection = connection;
}

Turma_disciplinaDAO.prototype.listarTurmaDisciplinas = function(callback) {
	this._connection.query('select turma_disciplina.id_turma_disciplina, turma_disciplina.codigo_disciplina, disciplina.nome_disciplina,turma_disciplina.codigo_turma, turma.turma from turma_disciplina inner join disciplina on disciplina.codigo_disciplina = turma_disciplina.codigo_disciplina inner join turma on turma.codigo_turma = turma_disciplina.codigo_turma order by id_turma_disciplina', callback);
}

Turma_disciplinaDAO.prototype.listarTurma_disciplinas = function(callback) {
	this._connection.query('select turma_disciplina.id_turma_disciplina, turma_disciplina.codigo_disciplina, disciplina.nome_disciplina,turma_disciplina.codigo_turma, turma.turma, turma_disciplina_professor.matricula, professor.nome_professor from turma_disciplina inner join disciplina on disciplina.codigo_disciplina = turma_disciplina.codigo_disciplina inner join turma on turma.codigo_turma = turma_disciplina.codigo_turma inner join turma_disciplina_professor on turma_disciplina_professor.id_turma_disciplina = turma_disciplina.id_turma_disciplina inner join professor on professor.matricula = turma_disciplina_professor.matricula order by id_turma_disciplina', callback);
}

Turma_disciplinaDAO.prototype.setTurma_disciplina = function(turma_disciplina, callback){
	this._connection.query('insert into turma_disciplina set ?',turma_disciplina,callback);
}

Turma_disciplinaDAO.prototype.listarMatriculaAlunos = function(callback) {
	this._connection.query('select aluno.RA, aluno.nome_aluno, turma.codigo_turma, disciplina.nome_disciplina, professor.nome_professor from turma_disciplina inner join disciplina	on disciplina.codigo_disciplina = turma_disciplina.codigo_disciplina inner join turma on turma.codigo_turma = turma_disciplina.codigo_turma inner join turma_disciplina_professor on turma_disciplina_professor.id_turma_disciplina = turma_disciplina.id_turma_disciplina inner join professor on professor.matricula = turma_disciplina_professor.matricula inner join matricula_aluno on matricula_aluno.id_turma_disciplina = turma_disciplina.id_turma_disciplina inner join aluno on aluno.RA = matricula_aluno.RA order by turma_disciplina.id_turma_disciplina',callback);
}

Turma_disciplinaDAO.prototype.setTurma_disciplinaProfessor = function(turma_disciplina, callback){
	this._connection.query('insert into turma_disciplina_professor set ?',turma_disciplina,callback);
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