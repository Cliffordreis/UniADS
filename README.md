# Projeto: UNIADS 🏫 
### projeto back-end Frameworks, Uninassau Boa Viagem/Recife ###
Projeto consiste em uma página de uma universidade (no caso uma fictícia, sendo somente de análise e desenvolvimento de sistemas), nela para o foco do projeto foi desenvolvido somente o cadastramento e login do
professor (sem distinção de matéria ou etc), onde nesse login fosse capaz de adicionar notas e apagar notas.

Esse projeto foi um grande aprendizado, pois foi meu primeiro contato na prática com um projeto back-end, então aprendi muito sobre as principais ferramentas para uma aplicação em node.js e conexão com Mysql.

### Ferramentas que foram utilizadas : 
* Node.js - Ferramenta para utilizar o JS no back-end
* Express - Framework utilizada no projeto
* Sequelize - ORM responsável pela criação de models e conexão com mysql
* Mysql2 - para funcionamento do link com o Sequelize
* Body-Parser - para transformar dados das requisições.

### características desenvolvidas no projeto:
* Sistema de criação de cadastros:
  Pattern automático no 'CPF'.
  Detectação de erro ao notar email ou cpf igual no banco de dados
  Confirmação de igualdade quando email é diferente da confirmação de email (mesma coisa para senhas) e outras pequenas coisas.

* Sistema de login:
  Aviso de erro ao não verificar um email e senha que batam com o banco de dados.

* Sistema de usuário:
  Navbar modificada, aparecendo botões de páginas que somente ficam disponíveis quando logado (e endereço das páginas redirecionam para o home quando identificado falta de login).
  Navbar com uma aba do usuário logado, com nome, opção de mais infos do perfil e logout.
  Página Home modificada com o nome do usuário
  Página de perfil com informações do usuário, como cpf, email e uma opção opara exclusão da conta.

* Sistema de adição de notas:
  Pattern automática no 'AV1 e 'AV2', sendo somente possível digitar números e '.' (e o pattern no input para quaisquer correções eventuais para tudo sair certo).
  Criação de uma variável 'media' através dos valores digitados em 'AV1' e 'AV2', pois assim será adicionado uma coluna 'media' na mesma linha das demais colunas.
  Criação de uma variável 'status', que caso tiver nota igual ou maior que 7 será adicionado 'aprovado' em uma coluna da mesma linha de colunas (e reprovado para o contrário).

* Sistema de Listagem de Notas:
  Apresenta todas as notas lançadas por ordem alfabética, com suas respectivas colunas (incluindo a 'media' e 'status' que não foram adicionados pelo usuário).
  Opção de exclusão individual de alguma adição de nota.

Algumas coisas poderiam ser modificadas, como controle de admin para o login, e assim fazer o separamento e criação de usuários alunos e professores, assim como um separamento mais detalhado de metérias,
principalmente para a aba de listagem de notas, porém para o escopo do projeto já está bom, pois tenho prazo e outros projetos para finalizar.
