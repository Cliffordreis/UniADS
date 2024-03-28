const db = require('./db')

const add_not = db.sequelize.define('add_notas', {
    aluno: { 
        type: db.Sequelize.STRING 
    },
    disciplina: {
        type: db.Sequelize.STRING
    },
    AV1: {
        type: db.Sequelize.DOUBLE
    },
    AV2: {
        type: db.Sequelize.DOUBLE
    },
    media: {
        type: db.Sequelize.DOUBLE
    },
    status: {
        type: db.Sequelize.STRING
    }

})

// add_not.sync({force: true})

module.exports= add_not;
