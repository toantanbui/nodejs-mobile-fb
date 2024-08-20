const mongoose = require('mongoose');
const connect = require('../connectDB/connectDBMongo')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema1 = new Schema({
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    avatar: Buffer,
    backgroundImage: Buffer,
    age: Number,
    time: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: String,
        ref: 'posts'
    }]


},
    { collection: 'object' },
    { timestamps: true }
)

const users = mongoose.model('object', schema1)


const schema2 = new Schema({
    idUsers: String,
    lastName: String,
    firstName: String,
    avatar: Buffer,
    postsName: String,
    postsContent: String,
    postsImage: Buffer,

    likes: {
        type: Number,
        default: 0
    },
    likeStatus: [
        {
            idUsers: String,
            status: Boolean
        }
    ],
    comment: [
        {
            idUsers: String,
            firstName: String,
            lastName: String,
            time: {
                type: Date,
                default: Date.now
            },
            commentContent: String,
            commentImage: Buffer,
            likes: {
                type: Number,
                default: 0
            },
            likeStatus: [
                {
                    idUsers: String,
                    status: Boolean
                }
            ],
            comment1: [
                {
                    idUsers: String,
                    firstName: String,
                    lastName: String,
                    time: {
                        type: Date,
                        default: Date.now
                    },
                    commentContent: String,
                    commentImage: Buffer,
                    likeStatus: [
                        {
                            idUsers: String,
                            status: Boolean
                        }
                    ]
                }
            ]

        }
    ]




},
    { timestamps: true }
)

const posts = mongoose.model('posts', schema2)






module.exports = {
    users: users,
    posts: posts
}