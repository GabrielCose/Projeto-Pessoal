    var database = require("../database/config");

    function listar() {
        // console.log("ACESSEI O Score  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucaoSql = `
                SELECT MAX(s.pontos) AS pontuacao, u.nome AS 'nome'
                FROM score AS s
                JOIN usuario as u
                ON s.fkUsuario = u.idUsuario
                GROUP BY u.idUsuario
                ORDER BY pontuacao DESC;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

function inserirPontuacao (pontos,idUsuario) {
    console.log("ACESSEI O Score MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserirPontuacao  (): ",idUsuario);
    var instrucaoSql = `
        INSERT INTO score (pontuacao, fkUsuario) VALUES (${pontos}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    listar,
    inserirPontuacao
}
