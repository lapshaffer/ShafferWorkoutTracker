const { connect, connection } = require('mongoose');

connect('mongodb://localhost/workoutTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;