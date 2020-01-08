const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['src/img/*.{jpg,jpeg,png}'], {
  destination: 'src/img/',
  plugins: [
    imageminWebp({
      quality: 65,
      
    })
  ]
}).then(() => {
  console.log('Images optimized');
});