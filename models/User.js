const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username:{
    type:String,
    unique: true,
    require: true   
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default: new Date()
    }
})

module.exports = model('User', userSchema);