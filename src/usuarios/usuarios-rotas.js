const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutencicacao = require('./middlewares-autenticacao');


module.exports = app => {
  app
    .route('/usuario/login')
    .post(
      middlewaresAutencicacao.local,
      usuariosControlador.login
    );

  app.route('/usario/logout').get(middlewaresAutencicacao.bearer, usuariosControlador.logout);
    
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id')
  .delete(
   middlewaresAutencicacao.bearer, usuariosControlador.deleta);
};
