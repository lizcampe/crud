var bodyParser =require('body-parser');
const Sequelize=require('sequelize');
var productosModel=require('./modelos/Productos');
var productoControlador= require('./controladores/ProductosControlador')


var express =require ('express'),
    app= express(),
    port = process.env.PORT||3000;

app.use(bodyParser.json())

//configurar Sequelize
var dbName='text_crud';
var userName='root';
var password='LaContraseña';

const sequelize= new Sequelize(dbName,userName,password,{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(()=> {
        console.log('Connection has been established successfully.');
    }).catch(err=>{
        console.error('unable to connect to the database:', err);
        });


productoControlador(app, productosModel(sequelize))

app.listen(port);


console.log ('todo list RESTful API server started on : '+port);