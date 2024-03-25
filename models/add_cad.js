const db = require('./db')

const add_cad = db.sequelize.define('add_cad', {
    nome: { 
        type: db.Sequelize.STRING 
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    }
})

//cdadd_cad.sync({force: true})

module.exports= add_cad;
