const sha1 = require('sha1');
const pgClient = require('../../config/db/pgDB');


exports.isValidPassword = async (password, userPassword) => {

    if (!password || !userPassword) return false;

    const hashedPsw = sha1(password);

    if (hashedPsw === userPassword) {
        return true;
    }

    return false;
};

exports.isConnected = async (username, isLoggedIn) => {

    const connection = await pgClient.connect();
    let update;



    if (isLoggedIn) {
        update = await connection.query(`UPDATE fredouil.users SET statut_connexion = 1 WHERE identifiant = '${username}'`);
        connection.release();


        return true;

    }

    update = await connection.query(`UPDATE fredouil.users SET statut_connexion = 0 WHERE identifiant = '${username}' `);
    connection.release();
    return false;









}

exports.updateProfile = async (username, newUser) => {

    let update;
    const connection = await pgClient.connect();
    const hashedPsw = sha1(newUser.newPsw);

    update = await connection.query(`UPDATE fredouil.users SET 
                                        motpasse = '${hashedPsw}',
                                        avatar = '${newUser.avatar}',
                                        humeur = '${newUser.humor}'
                                        WHERE identifiant = '${username}'`);
    connection.release();
    return update;
}


exports.getUserByUsername = async (username) => {
    const connection = await pgClient.connect();

    const user = await connection.query(`SELECT * FROM fredouil.users WHERE identifiant = '${username}'`);
    connection.release();
    return user;
}