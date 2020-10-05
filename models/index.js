const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/recipes';


mongoose.connect(connectionString, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB successfully connected ~~')
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB NOT connected: ', error);
});


module.exports = {
  Recipe: require('./Recipe')
};