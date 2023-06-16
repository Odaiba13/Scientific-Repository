const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// ------------------IMPORT MODULOS USER---------------------
const InsertarUser=require('./User/postUser');
const ListarUser=require('./User/getUser');
// ------------------IMPORT MODULOS CASE---------------------
const InsertarCase=require('./Case/postCase');
const ListarCase=require('./Case/getCase');
// ------------------IMPORT MODULOS CASE---------------------
const InsertarAlg=require('./Algorithm/postAlg');
const ListarAlg=require('./Algorithm/getAlg');
// ------------------IMPORT MODULOS CANCER---------------------
const InsertarCancer=require('./Cancer/postCancer');
const ListarCancer=require('./Cancer/getCancer');
// ------------------IMPORT MODULOS TREATMENT---------------------
const InsertarTreatment=require('./Treatment/postTreatment');
const ListarTreatment=require('./Treatment/getTreatment');


const configuracion ={
   hostname: '127.0.0.1',
   port: 3001,
}
const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use(bodyParser.json());

//Llamados al CRUD

app.get('/ListarUser', bodyParser.json(),ListarUser.GetUser);
app.post('/InsertUser', bodyParser.json(),InsertarUser.PostUser);

app.get('/ListarCase', bodyParser.json(),ListarCase.GetCase);
app.post('/InsertCase', bodyParser.json(),InsertarCase.PostCase);

app.get('/ListarAlg', bodyParser.json(),ListarAlg.GetAlg);
app.post('/InsertAlg', bodyParser.json(),InsertarAlg.PostAlg);

app.get('/ListarCancer', bodyParser.json(),ListarCancer.GetCancer);
app.post('/InsertCancer', bodyParser.json(),InsertarCancer.PostCancer);

app.get('/ListarTreatment', bodyParser.json(),ListarTreatment.GetTreatment);
app.post('/InsertTreatment', bodyParser.json(),InsertarTreatment.PostTreatment);


app.listen (configuracion, () => {
  console.log(`Conectado al servidor http://${configuracion.hostname}:${configuracion.port}`);
});