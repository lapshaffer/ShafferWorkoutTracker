const router = require('express').Router();
// const apiRoutes = require('./api');
const workoutRoutes = require('./workoutRoutes');

router.use('/', workoutRoutes);
// router.use('/api', apiRoutes);

module.exports = router;