import express from 'express';
import router from './route/router'

import bodyParser from 'body-parser';


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

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



router.handleRouter(app)


