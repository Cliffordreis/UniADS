const Sequelize = require("sequelize")

//conexão mysql
const sequelize = new Sequelize('uniadsweb', 'projeto', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

sequelize.authenticate().then(function (){
    console.log('conectado!');
}).catch(function(err){
    console.log('erro ao conectar com db '+ err);
})