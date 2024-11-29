var scoreModel = require("../models/scoreModel");

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

}