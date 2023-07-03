/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectToDatabase = require('./connectToDatabase');
const images = require('./routes/imageGalleryRoutes');

const app = express();
const port = 9000;
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public/`));

app.use(express.json());

app.use('/images', images);

app.use((req, res) => {
    res.status(404).json({ messege: 'invalid address' });
});

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        next('error - headers already sent');
    } else if (err.message) {
        res.status(500).send({ message: err.message });
    } else {
        res.status(500).send({
            message: 'there was an error, express did not give any message for this error',
        });
    }
}

app.use(errorHandler);

app.listen(port, () => {
    connectToDatabase();
    console.log(`server url address is http://localhost:${port}`);
});
