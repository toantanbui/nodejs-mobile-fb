import userService from '../services/userService'


let handleCreateUser = (req, res) => {
    console.log("request", req)
    userService.handleCreateUser(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetUser = (req, res) => {


    userService.handleGetUser(req.body)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleCreatePost = (req, res) => {
    console.log("req.user", req.user)
    userService.handleCreatePost(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })

}


let handleDeletePost = (req, res) => {

    userService.handleDeletePost(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleCreateComment = (req, res) => {

    userService.handleCreateComment(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}



let handleDeleteComment = (req, res) => {

    userService.handleDeleteComment(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetPostByTime = (req, res) => {

    userService.handleGetPostByTime(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetPostByPersonalPage = (req, res) => {

    userService.handleGetPostByPersonalPage(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetUserInfo = (req, res) => {

    userService.handleGetUserInfo(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleGetPostsInfo = (req, res) => {

    userService.handleGetPostsInfo(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleCreateComment1 = (req, res) => {

    userService.handleCreateComment1(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleDeleteComment1 = (req, res) => {

    userService.handleDeleteComment1(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}


let handleCreateLikePosts = (req, res) => {

    userService.handleCreateLikePosts(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}

let handleUpdateUserInfo = (req, res) => {

    userService.handleUpdateUserInfo(req)
        .then((data) => {

            console.log("data la", data)
            return res.status(200).json(data)
        })
        .catch((e) => {

            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: 'sever error'
            })
        })



}





module.exports = {
    handleCreateUser: handleCreateUser,
    handleGetUser: handleGetUser,
    handleGetUserInfo: handleGetUserInfo,

    handleCreatePost: handleCreatePost,
    handleDeletePost: handleDeletePost,
    handleGetPostByTime: handleGetPostByTime,
    handleGetPostByPersonalPage: handleGetPostByPersonalPage,
    handleGetPostsInfo: handleGetPostsInfo,

    handleUpdateUserInfo: handleUpdateUserInfo,

    handleCreateComment: handleCreateComment,
    handleDeleteComment: handleDeleteComment,

    handleCreateComment1: handleCreateComment1,
    handleDeleteComment1: handleDeleteComment1,

    handleCreateLikePosts: handleCreateLikePosts,



}