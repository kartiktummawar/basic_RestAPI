const mongoose = require('mongoose')

async function handleConnectDb(url){
    return mongoose.connect(url)
}

module.exports = {
    handleConnectDb
}
    