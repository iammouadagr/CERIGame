const express = require('express')
const router = express.Router();
const quizzController = require('../../controllers/quizz');
const quizzValidator = require('../../middlewares/quizz')

router.get('/themes', quizzController.getThemes);
router.get('/top10Overall', quizzController.getTop10Overall);
router.get('/top10SingleRound', quizzController.getTop10SingleRound);
router.get('/history/:user', quizzController.getHistoryByUserId);
router.get('/:theme', quizzValidator.ThemeValidator, quizzController.getQuestionsByThemeWithPagination);
router.post('/submitRound', quizzValidator.submitRound, quizzController.submitRound);


module.exports = router;