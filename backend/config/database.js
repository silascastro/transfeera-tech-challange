const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: '127.0.0.1',
  port: 3307,
  database: 'transfeera',
  username: 'root',
  password: 'qwert9876',
  dialect: 'mysql'
}
  // 'mysql://root:qwert9876@localhost:3307/transfeera'
);

sequelize
  .authenticate()
  .then(async () => {
    console.log('conexão realizada com sucesso!');
  })
  .catch((erro) => console.error(`erro ao conectar, erro ${erro}!`));

module.exports = sequelize;