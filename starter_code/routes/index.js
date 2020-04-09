const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs', { name: 'Melvin', name2: 'David'} );
  //res.json({ name: 'Melvin', name2: 'David'}) this is how its done with react 
});


// router.get('/about', (req, res, next) => {
//   res.render('about.hbs', { 
//       greeting: "Welcome to Spanish Class", 
//       verbs: ['correr', 'saltar', 'caminar', 'estudiar', 'bailar', 'matar'],
//       words: [{  adjective: 'lindo'}, {  adjective: 'fao'}, {  adjective: 'bonito'}, {  adjective: 'chismosa'}]
//     })
// })


router.get('/newpage', (req, res, next) => {
  res.render('newpage')
})

router.get('/Movies', (req, res, next) => {
  res.render('Movies')
})


module.exports = router;
