var express = require('express');
var router = express.Router();
var Exames = require('../controllers/exames')

// GET: os vários pedidos

router.get('/api/emd', function(req, res, next) {
  const resParam = req.query.res;
  const ModalParam = req.query.modalidade;
  Exames.list(resParam,ModalParam)
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});

router.get('/api/emd/:id', function(req, res) {
  Exames.getExame(req.params.id)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de compras"})
    })
});

router.get('/api/modalidades', function(req, res, next) {
  Exames.getModalidades()
    .then(listas => {
      listas.forEach(element => {
        element = element.modalidade
      });
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});

router.get('/api/atletas', function(req, res, next) {
  const genParam = req.query.gen;
  const ClubeParam = req.query.clube;
  Exames.atletas(genParam,ClubeParam)
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});
module.exports = router;
