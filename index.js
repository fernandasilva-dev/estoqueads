import express from 'express'
const app = express();

import path from 'path'
import { fileURLToPath } from 'url';
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

/*CONFIGURAÇÃO DA PASTA ESTATICA*/
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

/*CONFIGURAÇÃO DA VISÃO*/
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'handlebars');

/*ROTAS DO SISTEMA*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){ 

    var nome = 'Fernanda'

    res.render('admin/index', {nome: n})
});

app.get('/contato', function(req,res){
    res.render('admin/contato')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
});