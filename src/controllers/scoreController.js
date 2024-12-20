var scoreModel = require("../models/scoreModel");


function listar(req, res) {
    scoreModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os scores: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function inserirPontuacao(req, res) {
    var idUsuario = req.params.idUsuario;
    var pontos = req.body.qtdPontos;
console.log(idUsuario + `Esse é o id do usuario`)

    if (idUsuario == undefined){
        res.status(400).send("i")
    }else if (pontos == undefined){
        res.status(400).send("i")
    }else{
        scoreModel.inserirPontuacao(pontos, idUsuario)
        .then((resultado) => {
            res.status(201).json(resultado);
        }).catch((erro) => {
            console.log(erro)
            console.log(
                "\nhouve umm erro ao realizar o cadastro de pontuação"
            );
            res.status(500).json(erro.sqlMessage)
        })
    }

}



module.exports = {
    listar,
    inserirPontuacao
}