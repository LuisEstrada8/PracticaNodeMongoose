require('./connections')

const User = require('./models/User');

async function createUsers () {
    const userTwo = new User({
        username:'fazt2',
        password:'12345',
     });

    const userSave = await userTwo.save();
    return userSave;
}

createUsers()
.then(userSave => console.log(userSave))
.catch(err => console.log(err))
