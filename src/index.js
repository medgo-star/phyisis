const express = require('express');
const app = express();
const path = require('path');
//const server = http.createServer(app);

//Configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
//Middlewares(Permisos)

//routes
app.use(require('./routes/index'));
//archivos estaticos (para el front-end)
app.use(express.static(path.join(__dirname, 'public')));
//Escuchar el servidor
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});