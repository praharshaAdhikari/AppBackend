const mainRouter = require('express').Router()
const {getCommunityJobs, getPaidJobs, createJob, deleteJob, modifyJob, getPaidJob}= require('../controllers/posts')


// mainRouter.route('/paid').get(getPaidJobs).post(createJob)
mainRouter.get('/paid/:id', getPaidJob);
mainRouter.get('/paid', getPaidJobs);
mainRouter.post('/paid', createJob);
mainRouter.route('/community').get(getCommunityJobs).post(createJob)
mainRouter.route("/paid/:id").delete(deleteJob).patch(modifyJob)
mainRouter.route("/community/:id").delete(deleteJob).patch(modifyJob)

module.exports = mainRouter