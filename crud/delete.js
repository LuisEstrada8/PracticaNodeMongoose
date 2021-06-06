require('../connections')

const User = require('../models/User')

const FuncionBorrar  = async () => {

const Eliminar = await User.deleteOne({username:'fazt2'})

}

FuncionBorrar();