require('dotenv').config();

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;


const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})


const setFilePublic = async (fileId) => {
    try {
        await drive.permissions.create({
            fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone'
            }
        })

        const getUrl = await drive.files.get({
            fileId,
            fields: 'webViewLink, webContentLink'
        })

        return getUrl;
    } catch (error) {
        console.error(error);
    }
}



const uploadFile = async (base64Image) => {
    try {
        const filename = 'ten-tam.png'
        const buffer = Buffer.from(base64Image.split(',')[1], 'base64');
        // const buffer = new Buffer(base64Image, 'base64').toString('binary')
        console.log('buffer', buffer)
        // Tạo file tạm
        const tempFilePath = `./src/image/${filename}`;
        fs.writeFileSync(tempFilePath, buffer);



        // fs.unlinkSync(tempFilePath);

        // const createFile = await drive.files.create({
        //     requestBody: {
        //         name: filename,
        //         mimeType: 'image/png'
        //     },
        //     media: {
        //         mimeType: 'image/png',
        //         body: fs.createReadStream(tempFilePath)
        //     }
        // })
        // const fileId = createFile.data.id;
        // console.log(createFile.data)
        // const getUrl = await setFilePublic(fileId);

        // console.log(getUrl.data);

    } catch (error) {
        console.error(error);
    }
}



const deleteFile = async (fileId) => {
    try {
        console.log('Delete File:::', fileId);
        const deleteFile = await drive.files.delete({
            fileId: fileId
        })
        console.log(deleteFile.data, deleteFile.status)
    } catch (error) {
        console.error(error);
    }
}








module.exports = {
    uploadFile: uploadFile
}