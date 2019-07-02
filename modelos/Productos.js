const Sequelize= require ('sequelize');
module.exports=(sequelize)=> {
    const Productos =sequelize.define ('products', {
     id:{
         type:Sequelize.INTEGER,
         primaryKey: true
     },
     nombre:{
         type: Sequelize.INTEGER,
         allowNull: false
     },
     precio:{
         type:Sequelize.INTEGER,
         allowNull: false
     },  
     category:{
         type:Sequelize.STRING,
         allowNull: false
     },
     existencia: {
         type: Sequelize.BOOLEAN,
         allowNull:false
     },
     cantidad:{
         type: Sequelize.INTEGER,
         allowNull: false
     },
     descripcion:{
         type: Sequelize.TEXT,
         allowNull:true
     }
    }, {timestamps:false});
    return Productos;
    
}