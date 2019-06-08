function DisciplinaDAO(connection) {
	this._connection = connection;
}

DisciplinaDAO.prototype.listarDisciplinas = function(callback) {
	this._connection.query('select * from disciplina', callback);
}

DisciplinaDAO.prototype.setDisciplina = function(disciplina, callback){
	this._connection.query('insert into disciplina set ?',disciplina,callback);
}

DisciplinaDAO.prototype.getDisciplina = function(codigo_disciplina, RA, callback){
	this._connection.query('select * from disciplina where ?', codigo_disciplina, callback);
}

DisciplinaDAO.prototype.deleteDisciplina = function(RA, callback){
	this._connection.query('delete from disciplina where ?', codigo_disciplina, callback);
}

DisciplinaDAO.prototype.updateDisciplina = function(disciplina, callback){
	this._connection.query('update disciplina set ?', disciplina, callback);
}

module.exports = function(){
	return DisciplinaDAO;
}