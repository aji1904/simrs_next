import config from '../config'

function akun_bayar() {
    conn.connect()
    conn.query("SELECT nama_bayar, kd_rek from akun_bayar", function (err, rows, field) {
        if(err) throw err
        
    });
    conn.end()
}
