const express = require('express');
const cors = require('cors');

//multer middleware to handle the file upload
const multer = require('multer');
const fileUpload = multer({ dest: 'fileUploads/' });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyze', fileUpload.single('upfile'), (req, res, next) => {
    //get info from file and return the file size in JSON response
    res.json({ 'file name' : req.file.originalname ,'file size (bytes)' : req.file.size })
})

app.listen(PORT, () => {
    console.log('listening on port', PORT);
}); 