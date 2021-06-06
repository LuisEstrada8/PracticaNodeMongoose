require('../connections')

const User = require('../models/User')

async function getUsers() {
    
    const buscarUsuario = User.findOne({username:'fazt1'})
    return buscarUsuario;
}

getUsers().then(buscarUsuario=>console.log(buscarUsuario));