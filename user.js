/*user database v1*/
const mongoose = require('mongoose');
const DATABASE_URL ="mongodb+srv://Rahul:YuNrA542TvW0nbl7@cluster0.kw3gl.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  photo: {
    type: Buffer,
    required: true
  },
  photoType: {
    type: String,
    required: true
  },
  joinedOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  hasPost: {
    type: Boolean,
    required: true,
    default: false
  }
/*  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'UnverifiedUsers'
  }*/
});
module.exports = mongoose.model('User', userSchema); 