const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const server = express();
server.user(bodyParser.json());

// db connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notesdb'
});

db.connect(function (err) {
    if (err) {
        console.log('connect to DB error');
    } else {
        console.log('connect to DB successfuly');
    }
});

server.listen(8000, function check(err) {
    if (err) {
        console.log('establish server error');
    } else {
        console.log('server started!');
    }
});

server.post('/api/note', (req, res) => {
    const note = {
        title: req.body.title,
        content: req.body.content
    };

    const sql = 'INSERT INTO notes SET ?';
    db.query(sql, note, (err) => {
        if (err) {
            res.send({ status: false, message: 'create note failed' });
        } else {
            res.send({ status: true, message: 'create note success' });
        }
    });
});