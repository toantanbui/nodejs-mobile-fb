import express from 'express';
import router from './route/router'
import connectDB from './connectDB/connectDBMongo';

const User = require('./model/modelMongoDB')
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Moi ban truy cap vao http://localhost:${port}`)
})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.handleRouter(app)


// const newUser = new User.users({
//     firstName: "Toan",
//     lastName: "Toan",
//     age: "24",
//     email: "t1@gmail.com",
//     password: "12324",
//     post: [
//         {
//             postName: "Bai viet 1",
//             postContent: "Noi dung 1",

//             comment: [
//                 {
//                     fistName: "A",
//                     lastName: "Nguyen",
//                     content: "Bai viet do",

//                 },
//                 {
//                     fistName: "B",
//                     lastName: "Nguyen",
//                     content: "Bai viet hay",

//                 }
//             ]

//         },
//         {
//             postName: "Bai viet 2",
//             postContent: "Noi dung 2",

//             comment: [
//                 {
//                     fistName: "B",
//                     lastName: "Nguyen",
//                     content: "Bai viet do",

//                 }
//             ]

//         }
//     ]

// })
// newUser.save()
//     .then(() => {
//         console.log('User saved successfully!');

//     })
//     .catch(err => {
//         console.error('Error saving user:', err);
//     });
