const express = require('express')
const router = express.Router()

router.post('/01/03-02geese-for-profit', function (req, res) {
  if (req.input.value['geese-for-profit'] == 'no') {
    res.redirect('01/05-02do-not-register');
  } else {
    res.redirect('01/05-03register');
  }
})



















// Add your routes here - above the module.exports line

module.exports = router
