const Usuario = require("../models/usuario.model.js");

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnUsuario = async (req, res) => {
      try {
          let usuario = await Usuario.findById(req.params.id);
  
          if(!usuario){
              res.status(404).json({ msg: 'No existe el usuario'})
          }
          res.json(usuario);
  
      } catch (error) {
          console.log(error);
          res.status(500).send('Hubo un error');
      }
  }

// exports.actualizarUsuario = async (req, res) => {

//     try {
//         const {nombre, email, rol} = req.body;
//         let usuario = await Usuario.findById(req.params.id);

//         if(!usuario){
//             res.status(404).json({ msg: 'No existe el usuario'})
//         }

//         usuario.nombre = nombre;
//         usuario.email = email;
//         usuario.rol = rol;

//         usuario = await Usuario.findByIdAndUpdate({ _id: req.params.id }, usuario, { new:true})
//         res.json(usuario);

//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }
// }



// exports.eliminarUsuario = async (req, res) => {

//     try {
//         let usuario = await Usuario.findById(req.params.id);

//         if(!usuario){
//             res.status(404).json({ msg: 'No existe el usuario'})
//         }

//         await Usuario.findByIdAndRemove({ _id: req.params.id})
//         res.json({msg: 'Producto eliminado correctamente'});

//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }
// }