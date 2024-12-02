var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/scoreController");

router.get("/listar", function (req, res) {
    scoreController.listar(req, res);
});

router.post("/inserirPontuacao/:idUsuario", function (req, res) {
    scoreController.inserirPontuacao(req, res);
});


module.exports = router;