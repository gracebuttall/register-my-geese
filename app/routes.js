const express = require('express')
const router = express.Router()


//Required session data


//Version 1 - How many geese

router.post('/01/branch-how-many-geese', function (req, res) {
  const HowManyGeese = req.session.data ['how-many-geese']

    switch (HowManyGeese) {
      case '1-9':
      res.redirect ('05-01do-not-register');
      break;

      case '10-19':
      res.redirect ('03-02geese-for-profit');
      break;

      case '20 or more':
      res.redirect ('05-04register');
      break;

      case 'lost-count':
      res.redirect ('05-05register');
      break;
}

})

//Version 1 - Geese For Profit

router.post('/01/branch-geese-for-profit', function (req, res) {
  const GeeseForProfit = req.session.data ['geese-for-profit']

    switch (GeeseForProfit) {
      case 'yes':
      res.redirect ('05-03register');
      break;

      case 'no':
      res.redirect ('05-02do-not-register');
      break;
}

})

//Version 2 - How many geese

router.post('/02/branch-how-many-geese', function (req, res) {
  const HowManyGeese = req.session.data ['how-many-geese']

  if (HowManyGeese === '1-9') {
  res.redirect ('05-01do-not-register')
  }

  else if (HowManyGeese === 'lost-count') {
  res.redirect ('05-05register')
  }

  else {
  res.redirect ('03-02geese-for-profit')
  }
})

//Version 2 - Geese For Profit

router.post('/02/branch-how-many-geese' && '/02/branch-geese-for-profit', function (req, res) {
    const HowManyGeese = req.session.data ['how-many-geese']; const GeeseForProfit = req.session.data ['geese-for-profit']

    if ((HowManyGeese === '10-19') && (GeeseForProfit === 'No')) {
    res.redirect ('05-02do-not-register')
    }

    else if ((HowManyGeese === '10-19') && (GeeseForProfit === 'Yes')) {
    res.redirect ('05-03register')
    }

    else if ((HowManyGeese === '20-or-more') && (GeeseForProfit === 'Yes')) {
    res.redirect ('05-04register')
    }

    else if ((HowManyGeese === '20 or more') && (GeeseForProfit === 'No')) {
    res.redirect ('05-04register')
    }
})









// Add your routes here - above the module.exports line

module.exports = router
