const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'RISKI ABDILAH',
    password: 'R040999',
    database: 'kuliah',
});

connection.connect((err) => {
    if (err) {
        console.error('error connecton to MySql database:', err);
    } else {
        console.log('connected to MySql database');
    }
});

module.exports = connection;