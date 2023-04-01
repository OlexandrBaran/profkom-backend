const express = require('express')

const additionalPointsRequestRouter = require('./additionalPointsRequestRouter');
const additionalPointsResultRouter = require('./additionalPointsResultRouter');
const announcementRouter = require('./announcementRouter');
const newsRouter = require('./newsRouter');
const chummeryRouter = require('./chummeryRouter');
const haveIdeaRequestRouter = require('./haveIdeaRequestRouter');
const trustBoxRequestRouter = require('./trustBoxRequestRouter')
const teamMemberRouter = require('./teamMemberRouter');
const ratingRouter = require('./ratingRouter');
const questionAnswerRouter = require('./questionAnswerRouter');
const photoGalleryItemRouter = require('./photoGalleryItemRouter');
const questionRouter = require('./questionRouter')

/*
const userRouter = require('./userRouter');
const pollRouter = require('./pollRouter');
*/

const router = express.Router();   

router.use('/addPointReq', additionalPointsRequestRouter)
router.use('/addPointRes', additionalPointsResultRouter)
router.use('/announcements', announcementRouter)
router.use('/news', newsRouter)
router.use('/chummeries', chummeryRouter)
router.use('/haveIdeaReqs', haveIdeaRequestRouter)
router.use('/trustBoxReqs', trustBoxRequestRouter)
router.use('/team', teamMemberRouter)
router.use('/ratings', ratingRouter)
router.use('/questionAnswers', questionAnswerRouter)
router.use('/photoGalleryItems', photoGalleryItemRouter)
router.use('/questions', questionRouter)

/*router.use('/user', userRouter)
router.use('/poll', pollRouter)
*/

module.exports = router;