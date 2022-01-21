const Quizz = require('../modals/quizz')
const Pagination = require('../middlewares/pagination');
const pgClient = require('../../config/db/pgDB')


exports.getThemes = async (req, res) => {

    const themes = await Quizz.getThemes();

    if (!themes) res.status(200).json({
        success: false,
        message: "Pas de thème disponible."
    });
    else {
        res.status(200).json({
            success: true,
            themes: themes
        });

    }
}

exports.getQuestionsByTheme = async (req, res) => {

    const questions = await Quizz.getQuestionsByTheme(req.params.theme);
    //console.log(questions[0].quizz);
    if (!questions) {
        res.status(500).json({
            success: false,
            message: "Erreur du serveur"

        });
    } else {
        res.status(200).json({
            success: res.success,
            questions: questions

        });
    }


}

exports.getQuestionsByThemeWithPagination = async (req, res) => {

    const questions = await Quizz.getQuestionsByTheme(req.params.theme);

    //pagination 
    const page = parseInt(req.query.page);


    if (!questions) {
        res.status(500).json({
            success: false,
            message: "Erreur du serveur"

        });
    } else {

        const paginatedResults = Pagination.pagination(page, 1, questions[0].quizz);

        res.status(200).json({
            success: res.success,
            questions: paginatedResults

        });
    }


}


exports.submitRound = async (req, res) => {

    const top10 = await Quizz.getTop10SingleRound();

    const record = top10.rows[0].bestscore;

    if (res.score >= record) {
        res.recordBreaking = true;
        res.top10 = true;
        res.message = " Félicitation vous avez battu le record !! Vous etes en top de classement bien joué."
    }
    else {
        res.recordBreaking = false;
        if (top10.rows.includes({ id_user: req.body.user, bestscore: res.score })) {
            res.top10 = true;
            res.message = "Bravo !! Vous etes en top 10. "
        }
        else {
            res.top10 = true;
            res.message = "Bien joué."
        }

    }


    res.status(200).json({
        success: true,
        insert: res.insert,
        score: res.score,
        top10: res.top10,
        recordBreaking: res.recordBreaking,
        message: res.message

    });


}

exports.getTop10Overall = async (req, res) => {
    const top10 = await Quizz.getTop10TotalRounds();
    res.status(200).json({
        success: true,
        rows: top10.rows

    });
}

exports.getTop10SingleRound = async (req, res) => {
    const top10 = await Quizz.getTop10SingleRound();
    res.status(200).json({
        success: true,
        rows: top10.rows
    });
}

exports.getHistoryByUserId = async (req, res) => {

    const history = await Quizz.getHistoryByUserId(req.params.user);
    res.status(200).json({
        success: true,
        rows: history.rows
    });

}