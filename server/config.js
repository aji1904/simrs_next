var mysql = require('mysql')
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'sik'
})

conn.connect()
conn.query('select * from akun_bayar', function (err, rows, field) {
    if(err) throw console.error(err);
    console.log('this data', rows[].nama_bayar)
})
conn.end()
