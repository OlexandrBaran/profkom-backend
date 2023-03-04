const express = require('express')
const additionalPointsRequestRouter = require('./additionalPointsRequestRouter');
/*const userRouter = require('./userRouter');
const teamMemberRouter = require('./teamMemberRouter');
const additionalPointsRequestRouter = require('./additionalPointsRequestRouter');
const additionalPointsResultRouter = require('./additionalPointsResultRouter');
const announcementRouter = require('./announcementRouter');
const chummeryRouter = require('./chummeryRouter');
const haveIdeaRequestRouter = require('./haveIdeaRequestRouter');
const newsRouter = require('./newsRouter');
const pollRouter = require('./pollRouter');
const questionAnswerRouter = require('./questionAnswerRouter');
const ratingRouter = require('./ratingRouter');
const trustBoxRequestRouter = require('./trustBoxRequestRouter');*/

const router = express.Router(); 

router.use('/addPointReq', additionalPointsRequestRouter)

/*router.use('/user', userRouter)
router.use('/team', teamMemberRouter)
router.use('/addPointReq', additionalPointsRequestRouter)
router.use('/addPointRes', additionalPointsResultRouter)
router.use('/announcement', announcementRouter)
router.use('/chummery', chummeryRouter)
router.use('/haveIdeaReq', haveIdeaRequestRouter)
router.use('/news', newsRouter)
router.use('/poll', pollRouter)
router.use('/questionAnswer', questionAnswerRouter)
router.use('/rating', ratingRouter)
router.use('/trustBoxReq', trustBoxRequestRouter)*/

module.exports = router;