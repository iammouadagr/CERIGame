require('dotenv').config({ path: '../.env' })
const pgClient = require('pg')


const pool = new pgClient.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PWD,
    port: process.env.PG_PORT
});

module.exports = pool;

exports.client = () => {
    pool.connect((err, client, done) => {
        if (err) console.log('Erreur connection non etablie ! ' + err.stack);
        else {
            console.log('Connection étbalie avec succés');
            done();
        }
    })
}