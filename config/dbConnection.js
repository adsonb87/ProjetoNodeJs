var mysql = require('mysql');

var connMysql = function () {
	return connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'password',
		database : 'diario_de_classe'
	});
}

module.exports = function(){
	console.log("Banco carregado com sucesso!!");
	return connMysql;
}