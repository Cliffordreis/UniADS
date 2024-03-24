const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto', 'projeto', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function (){
    console.log('conectado!');
}).catch(function(err){
    console.log('erro ao conectar com db '+ err);
})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force:true})

Postagem.create({
    titulo: "teste de postagem",
    conteudo: "testando texto do conteudo aprendido sobre sequelize e conexão com mysql"
})