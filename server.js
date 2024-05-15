const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, mongodb_url } = require('./config');
const multer = require('multer');
const startScheduleJobs = require('./jobs');
const pasaghyrRouter = require('./routes/pasaghyr.route');


app.use(express.static('public'));
app.use(express.json());

app.use('/pasaghyr', pasaghyrRouter);
mongoose.connect(mongodb_url).then(() => {
    console.log('Mongo DB connected');
    startScheduleJobs();

})

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            throw createError.BadRequest('File size limit exceeded. Please upload a smaller file.');
        }
    }

    next(err);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
