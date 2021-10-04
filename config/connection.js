const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost/workoutTracker';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = connection;