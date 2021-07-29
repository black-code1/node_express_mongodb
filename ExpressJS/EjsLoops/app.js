const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/questions', (req, res) => {
  
  let questions = [
    {title: "what is Node.js?", user: "John", votes: "10"},
    {title: "what is MongoDB?", user: "Paul", votes: "6"},
    {title: "what is Express.js?", user: "Mike", votes: "8"}
  ]
  res.render('index', {questions:questions})
} )

app.listen(3000, () => console.log('Server started at port 3000'))