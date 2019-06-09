function Matricula_alunoDAO(connection) {
	this._connection = connection;
}

Matricula_alunoDAO.prototype.listarMatricula_alunos = function(callback) {
	this._connection.query('select * from matricula_aluno', callback);
}

Matricula_alunoDAO.prototype.setMatricula_aluno = function(matricula_aluno, callback){
	this._connection.query('insert into matricula_aluno set ?',matricula_aluno,callback);
}

Matricula_alunoDAO.prototype.getMatricula_aluno = function(id_turma_disciplina, callback){
	this._connection.query('select * from matricula_aluno where ?', id_turma_disciplina, callback);
}

Matricula_alunoDAO.prototype.deleteMatricula_aluno = function(id_turma_disciplina, callback){
	this._connection.query('delete from matricula_aluno where ?', id_turma_disciplina, callback);
}

Matricula_alunoDAO.prototype.updateMatricula_aluno = function(matricula_aluno, callback){
	this._connection.query('update matricula_aluno set ?', matricula_aluno, callback);
}

module.exports = function(){
	return Matricula_alunoDAO;
}