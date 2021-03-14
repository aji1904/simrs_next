const express = require('express')
const app = express()
const port = 4000
const config = require('./config')

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/akun_bayar', (req, res) => {
    conn.connect()
    conn.query('select * from akun_bayar', function (err, rows, field) {
        if(err) throw console.error(err);
        console.log('this data', rows.nama_bayar)
    })
    conn.end()
});

app.listen (port, () => {
    console.log(`server running port : ${port}`)
})