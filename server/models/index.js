const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const databaseUri =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/idea-board';
let databaseOptions;
if (!process.env.MONGODB_URI) {
  databaseOptions = {
    user: process.env.DB_USER,
    pass: process.env.DB_PWD,
    auth: {
      authdb: 'admin'
    },
    keepAlive: true,
    useNewUrlParser: true
  };
} else {
  databaseOptions = {
    keepAlive: true,
    useNewUrlParser: true
  };
}

mongoose
  .connect(
    databaseUri,
    databaseOptions
  )
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

module.exports.Idea = require('./idea');
