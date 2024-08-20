
import modelMongoDB from "../model/modelMongoDB"
const _ = require('lodash');
import { createJWT } from "../middleware/JWTAction"

let handleCreateUser = async (data) => {
    if (!data.email || !data.password) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        await modelMongoDB.users.create({
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            email: data.email,
            password: data.password,
            avatar: data.avatar,
            backgroundImage: data.backgroundImage,

        })
        return {
            errCode: 0,
            errMessage: "Create Success"
        }

    }


}

let handleGetUser = async (data) => {
    // console.log("data request ", data)
    if (!data.email || !data.password) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: data.email,
            password: data.password
        })

        if (!_.isEmpty(data1)) {
            let token1 = createJWT({
                email: data.email,
                password: data.password
            })
            return {
                errCode: 0,
                errMessage: "Get successful",
                data: data1[0]._id,
                token: token1
            }
        } else {
            return {
                errCode: 2,
                errMessage: 'Wrong account or password, the account has not been confirmed',

            }
        }


    }
}


let handleCreatePost = async (req) => {
    let data = req.body;
    let dataUser = req.user;
    if (!data.idUsers) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {

        if (!dataUser.email || !dataUser.password) {
            return {
                errCode: 1,
                errMessage: "Missing paramater JWT",
            }
        } else {
            let data1 = await modelMongoDB.users.find({
                email: dataUser.email,
                password: dataUser.password
            })
            if (!_.isEmpty(data1)) {

                let dataPosts = await modelMongoDB.posts.create({

                    idUsers: data.idUsers,
                    lastName: data.lastName,
                    firstName: data.firstName,
                    avatar: data.avatar,
                    postsName: data.postsName,
                    postsContent: data.postsContent,
                    postsImage: data.postsImage,


                })

                if (dataPosts) {
                    await modelMongoDB.users.updateOne({
                        _id: data.idUsers

                    },
                        {

                            $push: {
                                posts: dataPosts._id

                            }

                        })
                }


                return {
                    errCode: 0,
                    errMessage: "Create posts successful",
                    data: dataPosts

                }
            } else {
                return {
                    errCode: 1,
                    errMessage: "Your account and password are not accurate or have changed",

                }

            }
        }

    }

}


let handleDeletePost = async (req) => {
    let data = req.body;
    let dataUser = req.user;
    if (!data.idPosts) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: dataUser.email,
            password: dataUser.password
        })
        if (!_.isEmpty(data1)) {
            await modelMongoDB.posts.deleteOne(
                {
                    _id: data.idPosts
                }

            )
            return {
                errCode: 0,
                errMessage: "Delete successful",

            }

        } else {
            return {
                errCode: 1,
                errMessage: "Your account and password are not accurate or have changed",

            }

        }





    }

}

let handleCreateComment = async (req) => {
    let data = req.body;
    let dataUser = req.user;
    console.log("request data", data)
    if (!data.idPosts) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: dataUser.email,
            password: dataUser.password
        })
        if (!_.isEmpty(data1)) {

            await modelMongoDB.posts.updateOne(
                {
                    _id: data.idPosts
                }, {
                $push: {
                    comment: {

                        idUsers: data.idUsers,
                        firstName: data.firstName,
                        lastName: data.lastName,

                        commentContent: data.commentContent,
                        commentImage: data.commentImage,
                    }

                }
            }


            )
            return {
                errCode: 0,
                errMessage: "Create Comment successful",

            }

        } else {
            return {
                errCode: 1,
                errMessage: "Your account and password are not accurate or have changed",

            }

        }


    }
}



let handleDeleteComment = async (req) => {
    let data = req.body;
    let dataUser = req.user;
    if (!data.idPosts) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: dataUser.email,
            password: dataUser.password
        })
        if (!_.isEmpty(data1)) {
            await modelMongoDB.posts.updateOne(
                {
                    _id: data.idPosts
                }, {
                $pull: {
                    comment: {
                        _id: data.idComment
                    }
                }
            }



            )
            return {
                errCode: 0,
                errMessage: "Delete successful",

            }



        } else {
            return {
                errCode: 1,
                errMessage: "Your account and password are not accurate or have changed",

            }

        }



    }

}

let handleGetPostByTime = async (req) => {
    let dataUser = req.user;

    if (false) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: dataUser.email,
            password: dataUser.password
        })
        if (!_.isEmpty(data1)) {

            let data11 = await modelMongoDB.posts.find({

            })
                .sort({ time: -1 })
                .limit(10)

            if (!_.isEmpty(data11)) {
                return {
                    errCode: 0,
                    errMessage: 'success',
                    data: data11
                }
            } else {
                return {
                    errCode: 3,
                    errMessage: 'Not found',

                }
            }



        } else {
            return {
                errCode: 1,
                errMessage: "Your account and password are not accurate or have changed",

            }

        }




    }
}

let handleGetPostByPersonalPage = async (req) => {
    let data = req.body;
    let dataUser = req.user;

    if (!data.idUsers) {
        return {
            errCode: 1,
            errMessage: "Missing paramater",
        }
    } else {
        let data1 = await modelMongoDB.users.find({
            email: dataUser.email,
            password: dataUser.password
        })


        if (!_.isEmpty(data1)) {

            let data11 = await modelMongoDB.users.find({
                _id: data.idUsers

            })
                .populate('posts')

            if (!_.isEmpty(data11)) {
                return {
                    errCode: 0,
                    errMessage: 'success',
                    data: data11
                }
            } else {
                return {
                    errCode: 3,
                    errMessage: 'Not found',

                }
            }



        } else {
            return {
                errCode: 1,
                errMessage: "Your account and password are not accurate or have changed",

            }

        }




    }
}



module.exports = {
    handleCreateUser: handleCreateUser,
    handleGetUser: handleGetUser,

    handleCreatePost: handleCreatePost,
    handleDeletePost: handleDeletePost,
    handleGetPostByTime: handleGetPostByTime,
    handleGetPostByPersonalPage: handleGetPostByPersonalPage,

    handleCreateComment: handleCreateComment,
    handleDeleteComment: handleDeleteComment
}