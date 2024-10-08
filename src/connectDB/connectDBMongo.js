const mongoose = require('mongoose');
require('dotenv').config();

const link = process.env.LINK;

//Tao ket noi
const connect = mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('ket noi MongoDB xong')
    })
    .catch((e) => {
        console.log('e', e)
    })

module.exports = { conect: connect }