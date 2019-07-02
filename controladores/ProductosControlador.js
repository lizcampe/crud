module.exports=(app, productosModel)=> {

    //LISTA DE TODOS LOS PRODUCTOS
    app.get('/products', (req, res)=>{
        console.log('listando...')


        let whereObject={
            }
        if (req.query.nombre) {
            console.log(req.query.nombre)
            whereObject.nombre= req.query.nombre;
        }
        if (req.query.precio) {
            console.log(req.query.precio)
            whereObject.precio= req.query.precio;
        }
        if (req.query.category) {
            console.log(req.query.category)
            whereObject.nombre= req.query.category;
        }

        productosModel.findAll({
            where:whereObject
        }).then((resp)=>{
            res.send(resp)
        })
        
    });
//crear
    app.post('/products', (req, res)=>{
        console.log('creando...')

        productosModel.create(req.body).then(resp=>{
            console.log("auto-generated ID:", resp.id);
            res.send(resp);
        });
    });
//actualizar
    app.put('/products/:id', (req, res)=>{
        console.log('actualizando...')

        productosModel.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(resp=>{
            console.log('Actualizado')
            res.send(null);
        })
    });

    //eliminar
    app.delete('/products/:id', (req, res)=>{
        console.log('eliminando...')

        productosModel.destroy({
            where:{
                id:req.params.id
            }

        }).then((resp)=>{
            console.log('eliminado...')
            res.send(null);
        });

    });
//obtener producto por id
    app.get('/products/:id', (req, res)=>{
        console.log('obteniendo...')

        productosModel.findOne({
            where:{
                id:req.params.id
            }
        }).then((resp)=> {
            console.log('encontrado: '+resp.id)
            res.send(resp);
        })
    });

}