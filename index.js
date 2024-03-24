const express = require("express");
const app = express();
const {engine} = require('express-handlebars')
const BodyParser = require('body-parser')
const add_not = require('./models/add_notas')

//config template engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//configurando páginas estáticas
    app.use(express.static('public'))
//BodyParsern
    app.use(BodyParser.urlencoded({extended: false}))
    app.use(BodyParser.json())

//rotas
    app.get('/', function(req, res){ //home
        res.render('home', {style: 'home.css' });
    })

    app.get("/lista_notas", function(req, res){ //pag notas (prof)
        add_not.findAll({order: [['aluno', 'ASC']]}).then(function(add_not){
            res.render('lista_notas', {add_not: add_not});
        })
    });

    app.get('/deletar/:id', function(req, res){  //rt para deletar lista no lista_notas
        add_not.destroy({where:{'id': req.params.id}}).then(function(){
            res.redirect('/lista_notas')
        }).catch(function(err){
            res.send("esta postagem não existe")
        })
    })
    

    app.get("/add_notas", function(req, res){ //página adição de notas professor
        res.render('adicao_notas');
    }); 

    app.post("/add_concluido", function(req, res){ //conclusão form adição de notas professor
        add_not.create({
            aluno : req.body.aluno,
            disciplina: req.body.disciplina,
            AV1: req.body.av1,
            AV2: req.body.av2
        }).then(function(){
            res.redirect('/add_notas')
        }).catch(function(err){
            res.send("houve um erro" + err)
        })
    });

    app.get('/cadastro', function(req, res){
        res.render('cadastro')
    })


app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
});