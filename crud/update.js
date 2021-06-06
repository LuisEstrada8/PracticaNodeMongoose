require('../connections');

const User = require('../models/User');

const encontrarUsuario = async () => {
    const user = await User.findOne({username:'fazt1'});
    user.password = 'avercalale';
    user.save();
}

async function Update() {

    const user = await User.updateOne({username:'fazt'},{password:'dadsda'});

}

async function UpdateOtherWay() {

    const user = await User.findByIdAndUpdate({username:'fazt'},{password:'32432'});

}

Update();