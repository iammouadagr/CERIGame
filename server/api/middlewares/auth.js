const User = require('../modals/users')
const pgClient = require('../../config/db/pgDB')

exports.login = () => pgClient.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    }
    client.query("SELECT * FROM fredouil.users where identifiant like 'moag'", (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows);

    })
})

exports.loginV1 = async (req, res, next) => {



    const connection = await pgClient.connect();
    const { email, psw } = req.body;


    try {
        const user = await connection.query("SELECT * FROM fredouil.users where identifiant = $1", [email]);
        connection.release();
        if (!user.rows[0]) {
            res.success = false;
            res.message = " Aucun utilisateur trouvé. ";
        }
        else {

            const validate = await User.isValidPassword(psw, user.rows[0].motpasse);

            if (!validate) {
                res.success = false;
                res.message = " Ops. Mot de passe erroné. ";
            }
            else {

                req.session.isConnected = await User.isConnected(user.rows[0].identifiant, true);
                req.session.username = email;
                req.session.lastConnection = new Date(Date.now()).toISOString();
                req.session.token = req.session.id;
                res.success = true;
                res.user = user.rows[0];


            }

        }


    } catch (err) {
        res.success = false;
        res.message = " Erreur !! " + err.stack;
    } finally {
        next();
    }

}


