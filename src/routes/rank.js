var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/rankController");

router.post("/rank/:idUsuario", function (req, res) {
    scoreController.inserirPontuacao(req, res);
});


module.exports = router;