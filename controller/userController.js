const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});

exports.getProfile = async(req,res) => {
    let sql = `SELECT * from user WHERE email = '${req.user.emails[0].value}';`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
    })
    res.send('user profile');
}

exports.postContact = async(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    let sql = `INSERT into contact (name, email, message) VALUES("${name}", "${email}", "${message}");`;
    conn.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.sendStatus(200);
    })
}