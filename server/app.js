const express = require('express');
const app = express();
const dotenv = require('dotenv')
const bodyPraser = require('body-parser')
const cors = require('cors');
dotenv.config()
const mysql = require('mysql2')
const port = process.env.PORT;


// console.log('db', db)



app.use(bodyPraser.urlencoded({ extended: true }));
app.use(cors())
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
app.use(express.json());

app.get('/api/contact', (req, res) => {

    const sql = "SELECT * FROM contact_db"
    db.query(sql, (err, result) => {
        res.send(result);
    })


})
// app.get('/', (req, res) => {
//     const sqlresult = "INSERT INTO contact_db (id, name, email, contact) VALUES(2,'saran','saran@gmail.com',9092990408)"
//     db.query(sqlresult, (error, result) => {
//         // if (err) {
//         console.log('err', error)
//         // } else {
//         console.log('result', result)
//         // }
//         res.send('Hello World')
//     })


app.listen(port, () => {
    console.log(`Welcome to Mini project in ${port}`)
    // console.log(db)
})

