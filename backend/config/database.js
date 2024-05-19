const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'mysql://root:qwert9876@localhost:3307/transfeera'
);

sequelize
  .authenticate()
  .then(() => {
    console.log('conexão realizada com sucesso!');
  })
  .catch(() => console.error('erro ao conectar!'));

module.exports = sequelize;