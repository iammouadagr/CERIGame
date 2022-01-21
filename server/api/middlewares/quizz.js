const Quizz = require('../modals/quizz')

exports.ThemeValidator = async (req, res, next) => {

    const theme = req.params.theme;

    const exists = await Quizz.themeExists(theme);

    if (!exists) {
        res.success = false;
        res.success = "Pas de quizz correspondant au theme";

    } else {
        res.success = true;
    }
    next();
}

exports.submitRound = async (req, res, next) => {

    console.log(req.body);
    let difficulty;
    switch (req.body.difficulty) {
        case 1:
            difficulty = 100
            break;
        case 2:
            difficulty = 200
            break;
        case 3:
            difficulty = 300
            break;
        default:
            break;
    }

    const score = (req.body.rightAnswers * difficulty) - (req.body.time / 450) * ((req.body.rightAnswers * difficulty) / 2);


    try {
        const insert = await Quizz.insertRound(req.body, score);
        if (insert) {
            res.insert = true;
            res.score = score;
            next();
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.stack
        });
    }
}