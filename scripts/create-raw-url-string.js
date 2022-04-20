require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const url = cloudinary.url('sample', {
  transformation: { raw_transformation: 'h_500' },
});
console.log(url)
