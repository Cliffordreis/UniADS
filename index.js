const express = require("express");
const app = express();
const {engine} = require('express-handlebars')
const BodyParser = require('body-parser')
const add_not = require('./models/add_notas')
const add_cad = require('./models/add_cad')
app.locals.logado = false;
app.locals.user;
const { Op } = require("sequelize"); //para requisições "or"

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
        if(app.locals.logado){
        add_not.findAll({order: [['aluno', 'ASC']]}).then(function(add_not){
            res.render('lista_notas', {add_not: add_not});
        })
        }else{
            res.redirect('/')
        }

    });

    app.get('/deletar/:id', function(req, res){  //rt para deletar lista no lista_notas
        add_not.destroy({where:{'id': req.params.id}}).then(function(){
            res.redirect('/lista_notas')
        }).catch(function(err){
            res.send("esta postagem não existe")
        })
    })
    

    app.get("/add_notas", function(req, res){ //página adição de notas professor
        if(app.locals.logado){
        res.render('adicao_notas');
        }else{
            res.redirect('/')
        }
    }); 

    app.post("/add_concluido", function(req, res){ //conclusão form adição de notas professor
        add_not.create({
            aluno : req.body.aluno,
            disciplina: req.body.disciplina,
            AV1: req.body.av1,
            AV2: req.body.av2
        }).then(function(){
            res.render('adicao_notas', {nova_nota:'nota adicionada!'});

        }).catch(function(err){
            res.send("houve um erro" + err)
        })
    });

    app.post("/cad_concluido", function(req, res){ //conclusão cadastramento
        const email = req.body.email
        const cpf = req.body.cpf
        add_cad.findOne({
            where: { 
                [Op.or]:[
                {email : email}, {cpf : cpf}
                ]
        }
        }).then(result => {
            if (result) {
                res.render('cadastro', { existente: 'Já existe uma conta com este email/cpf no banco de dados!' });
            } else {
                add_cad.create({
                            nome : req.body.nome,
                            email: req.body.email,
                            senha: req.body.senha,
                            cpf: req.body.cpf
                        }).then(function(){
                            res.render('login', {cadastrado:'cadastro concluído!'});
                        }).catch(function(err){
                            res.send("houve um erro" + err)
                        }).catch(function(err){
                            res.send('erro' + err)
                        })
                    
            }
        })
    });       
        
        
    //     add_cad.create({
    //         nome : req.body.nome,
    //         email: req.body.email,
    //         senha: req.body.senha,
    //         cpf: req.body.cpf
    //     }).then(function(){
    //         res.render('cadastro', {cadastrado:'cadastro concluído!'});
    //     }).catch(function(err){
    //         res.send("houve um erro" + err)
    //     })
    // });


    app.get('/cadastro', function(req, res){ //página de cadastro
        res.render('cadastro')
    })

    app.get('/login', function(req, res){ //pag de cadastro login
        res.render('login')
    })

    app.post('/login_concluido', function(req, res){ //autenticação do login 
        const email = req.body.login
        const senha = req.body.senha
        add_cad.findOne({
            atributes: ['nome'],
            where: {
                email : email,
                senha : senha
            }
        }).then(function(resposta){
            if(resposta){
                app.locals.user = resposta.nome
                res.redirect('/')
                app.locals.logado = true;
            }else{
                res.render('login', { error:'credenciais não condizem com o banco de dados!'});
            }
            
        }).catch(function(err){
            res.send("erro" + err)
        })
    })

    app.get('/perfil', function(req,res){ //pagina perfil
        if(app.locals.logado){
            res.render('perfil');
        }else{
            res.redirect('/');
        }
    })

    app.get('/logout', function(req,res){ //rota para logout de usuário
        app.locals.logado = false;
        app.locals.user = null;
        res.redirect('/');
    })


app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
});