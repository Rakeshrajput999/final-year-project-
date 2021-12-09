var express = require('express');
var router = express.Router();
var RegisterChecks =require("../middleware/RegisterChecks")
var Register =require("../controllers/Register")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/** 
 * @description {email first name lastname  paswword conferm password } = req.body
 * security performance edge cses
 * level 1
 * email validaton 
 * password validaton 
 * password conferm password same 
 * lecel 2
 * 
 * javascript and sql injection 
 * level 3
 * check if email already exist 
 * emaail.lowercase
 * save 
 * 
 */

router.post('/register',RegisterChecks,Register)

module.exports = router;
