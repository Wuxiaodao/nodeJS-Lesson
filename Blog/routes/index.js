var express = require('express');
var router = express.Router();
var {users,chapterList} = require('../data/data.json');
/* GET home page. */
router.get('/', function(req,res) {
  res.render('login');
});
router.post('/', function(req, res) {
  for (var i = 0; i < users.length; i++) {
    var data = req.body;
      if (data.username == users[i].username && data.password == users[i].password) {
          res.render('list', {chapterList:chapterList});
      }else{
        res.render(
          'error',
          {message:'用户名密码错误'}
          );
      }
    }
});
module.exports = router;
