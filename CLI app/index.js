const log = console.log;
const chalk = require('chalk');
var readlineSync = require('readline-sync')
var sc = 0
var userName = readlineSync.question('please enter your name?\n')
log('Welcome ' + (chalk.bgMagentaBright
  (userName)) + ' in "get to know sanket better"\n\n Please ' + chalk.bgMagentaBright
    ('type') + ' from given options')

function check(question, answer) {
  var userAns = readlineSync.question(question)
  var res = userAns.toUpperCase(userAns)
  if (res === answer) {
    log(chalk.bgGreenBright('correct answer'))
    sc++;
  }
  else {
    console.log(chalk.bgRedBright('oops! wrong answer'))

  }
  log('-----------------------------------------------------------------')

}

var quesList = [
  {
    question: '\n Where do I live? \n a.pune b.mumbai c.goa \n',
    answer: 'PUNE'
  },

  {
    question: '\n Who is my fav superhero? \n a.Thor b.Spiderman c.Ironman \n',
    answer: 'THOR'
  }
  , {
    question: '\nWhen is my Birthday? \n a.July b.June c.May \n',
    answer: 'JULY'
  },
  {
    question: '\nWhat is my fav food? \n a.misal b.pavbhaji c.vadapav \n',
    answer: 'MISAL'
  },
  {
    question: '\nWhat is my fav colour? \n a.orange b.red c.blue\n',
    answer: 'ORANGE'
  }
]

for (var i = 0; i < quesList.length; i++) {
  check(quesList[i].question, quesList[i].answer)
}


log(chalk.bgMagenta('your final score is ' + sc + '\n THANK YOU'))
