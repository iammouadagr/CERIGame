const pgClient = require('../../config/db/pgDB')
const User = require('../modals/users')

exports.update = async (req, res, next) => {

    const connection = await pgClient.connect();

    const username = req.body.username;


    try {
        const user = await connection.query("SELECT * FROM fredouil.users where identifiant = $1", [username]);
        connection.release();

        if (!user.rows[0]) {
            res.success = false;
            res.message = " Aucun utilisateur trouvé. ";
        }
        else {
            const update = await User.updateProfile(username, req.body);
            if (!update) {
                res.success = false;
                res.message = " Modification échouée. ";
            }
            else {
                res.success = true;
                res.message = " Votre profil a été bien modifié. ";
            }

        }



    } catch (err) {
        res.success = false;
        res.message = " Erreur !! " + err.stack;
    } finally {
        next();
    }
}

exports.getUserByUsername = async (req, res, next) => {

    const username = req.params.username;
    try {
        const user = await User.getUserByUsername(username);

        if (!user.rows[0]) {
            res.success = false;
            res.message = " Aucun utilisateur trouvé. ";
        }
        else {
            res.success = true;
            res.user = user.rows[0];

        }

    } catch (err) {
        res.success = false;
        res.message = " Erreur !! " + err.stack;

    } finally {
        next();
    }
}

exports.checkUserPassword = async (req, res, next) => {

    const username = req.body.username;
    const psw = req.body.psw;
    try {
        const user = await User.getUserByUsername(username);

        if (!user.rows[0]) {
            res.success = false;
            res.message = " Aucun utilisateur trouvé. ";
        }
        else {
            const validate = await User.isValidPassword(psw, user.rows[0].motpasse);

            if (!validate) {
                res.success = false;
                res.message = " Ops. Mot de passe erroné. Modification annulée ";
            }
            else {
                res.success = true;
                res.message = "Mot de passe validé !"
            }

        }

    } catch (err) {
        res.success = false;
        res.message = " Erreur !! " + err.stack;

    } finally {
        next();
    }


}