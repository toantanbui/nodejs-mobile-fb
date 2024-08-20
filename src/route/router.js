import express from 'express'
import userController from '../controllers/userController'
import { checkUserJWT } from '../middleware/JWTAction'
let router = express.Router();

const handleRouter = (app) => {
    router.get('/', (req, res) => {
        res.send('Trang chu')
    })
    router.post('/createUser', userController.handleCreateUser)
    router.post('/getUser', userController.handleGetUser)

    router.post('/createPost', checkUserJWT, userController.handleCreatePost)
    router.post('/deletePost', checkUserJWT, userController.handleDeletePost)
    router.get('/getPostByTime', checkUserJWT, userController.handleGetPostByTime)
    router.post('/getPostByPersonalPage', checkUserJWT, userController.handleGetPostByPersonalPage)

    router.post('/createComment', checkUserJWT, userController.handleCreateComment)
    router.post('/deleteComment', checkUserJWT, userController.handleDeleteComment)

    return app.use('/', router)
}

module.exports = {
    handleRouter: handleRouter
}
