const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config();

const notesRouter = require('./routes/notes.router');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1/notes', notesRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server started running...');
});