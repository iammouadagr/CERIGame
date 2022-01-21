const mongoose = require('../../config/db/mongoDB')
const pgClient = require('../../config/db/pgDB')
const Schema = mongoose.Schema;

const quizzSchema = new Schema({

    _id: {
        type: String
    },
    fournisseur: {
        type: String
    },
    rédacteur: {
        type: String
    },
    thème: {
        type: String
    },
    quizz: {
        type: [{
            id: {
                type: String
            },
            question: {
                type: String
            },
            propositions: {
                type: [String]
            },
            réponse: {
                type: String
            },
            anecdote: {
                type: String
            }
        }]
    }

});

quizzSchema.statics.getThemes = async () => {

    return await mongoose.model('quizz').find({}, { thème: 1 });

}

quizzSchema.statics.themeExists = async (theme) => {

    const result = await mongoose.model('quizz').findOne({ thème: theme });

    if (result) return true;

    return false;

}

quizzSchema.statics.getQuestionsByTheme = async (theme) => {

    return await mongoose.model('quizz').find({ thème: theme });
}

quizzSchema.statics.insertRound = async (data, score) => {

    const connection = await pgClient.connect();
    const insert = await connection.query(`
        INSERT INTO fredouil.historique
        (
            id_user,
            date_jeu,
            niveau_jeu,
            nb_reponses_corr, 
            temps,
            score
        ) VALUES (
            ${data.user},
            NOW(),
            ${data.difficulty},
            ${data.rightAnswers},
            ${data.time},
            ${score}
        );`);
    connection.release();

    return insert
}


quizzSchema.statics.getTop10TotalRounds = async () => {

    const connection = await pgClient.connect();
    const top10 = await connection.query(
        `SELECT
            identifiant as username,
            SUM(score) as overall_score,
            COUNT(*) as total_rounds
        FROM
            fredouil.historique
        JOIN
            fredouil.users
        ON
            id_user = fredouil.users.id
        GROUP BY
            identifiant
        ORDER BY
            overall_score
            DESC
        LIMIT
            10
        ;`
    )
    connection.release();
    return top10;
}

quizzSchema.statics.getTop10SingleRound = async () => {
    const connection = await pgClient.connect();
    const top10 = await connection.query(
        `
        SELECT 
        DISTINCT 
        id_user,
        MAX(score) as bestScore,
        identifiant
        FROM fredouil.historique 
        INNER JOIN fredouil.users
        ON
            id_user = fredouil.users.id
        GROUP BY id_user,identifiant 
        ORDER BY bestScore DESC 
        LIMIT 10;
        ;
        `);
    connection.release();
    return top10;
}

quizzSchema.statics.getHistoryByUserId = async (userId) => {

    const connection = await pgClient.connect();
    const history = await connection.query(
        `
        SELECT * FROM fredouil.historique 
        WHERE id_user =  ${userId} 
        ORDER BY date_jeu DESC 
        ;

        `
    );
    connection.release();
    return history;

}



module.exports = mongoose.model('quizz', quizzSchema, 'quizz');