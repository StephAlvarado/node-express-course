const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require ('./authorize')
//req => middleware => res

const people = require('./routes/v1/people')


//Middleware
//app.use([logger,authorize])
app.use(express.static('./public'))

app.get('/', logger, (req, res) => {
  res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.get('/api/products', logger,(req,res) =>{
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req,res) =>{
    console.log(req.user)
    res.send('Items')
})


//static assets 

app.use(express.static('./methods-public'))

//parse from data 
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use('/api/v1/people', people) // or peopleRouter


app.listen(3000, () => {
  console.log('server is listening on port 3000...')
})



















// HTTP-app

//const http = require ('http')
//const {readFileSync} = require('fs')

// get all files 
//const homePage = readFileSync('./navbar-app/index.html')
//const homeStyles = readFileSync('./navbar-app/styles.css')
//const homeImage = readFileSync('./navbar-app/logo.svg')
//const homeLogic = readFileSync('./navbar-app/browse-app.js')





//const server = http.createServer((req,res) => {
    //console.log(req.method)
    //const url = req.url
    //console.log(url)


// home page 
    //if (url === '/'){
    //res.writeHead(200, {'content-type:': 'text/html'})
   // res.write(homePage)
    // res.end()
   // }

//about page 
  //  else if (url === '/about'){
       // res.writeHead(200, { 'content-type:': 'text/html'})
       // res.write('<h1>about page</h1>')
        // res.end()
   // }

 //styles
 //else if (url === '/styles.css'){
   // res.writeHead(200, { 'content-type:': 'text/css'})
   // res.write(homeStyles)
    // res.end()
//}   

 //image/logo
 //else if (url === '/logo.svg'){
    //res.writeHead(200, { 'content-type:': 'image/svg+xml'})
   // res.write(homeImage)
    // res.end()
//}   

 //Logic
 //else if (url === '/browser-app.js'){
  //  res.writeHead(200, { 'content-type:': 'text/javascript'})
   // res.write(homeLogic)
    // res.end()
//}   

//404
//else {
//res.writeHead(404, {'content-type:': 'text/html'})
       // res.write('<h1>page not found</h1>')
       //  res.end()
//}
//})

//app.use(express.static("./public"))

//server.listen(3000)






//Express basics 
//IMPORTANT 

//const express = require('express')
// NOT PART OF IMPORTANT const path = require('path')

//const app = express()

//app.get('/', (req, res) =>{
    //console.log('user hit the resource')
    //res.status(200).send('Stephanie Home Page')
//})

//app.get('/about', (req,res) =>{
  //  res.status(200).send('About Page')
//})
// middleware
//app.use(express.static('./public'))

//app.get('/api/V1/test', (req, res) =>{
  //  res.json({message: 'It Worked!'})
//})



//app.all('*', (req,res) =>{
  //  res.status(404).send('<h1>resource not found </h1>')
//})



//app.listen(3000, () => {
  //  console.log('server is listening on port 3000...')
//})

//app.get
//app.post
//app.put
//app.delete
//app.all
// app.use
//app.listen


//Middleware
//const express = require('express')
//const app = express()
//const morgan = require('morgan')
//const logger = require('./logger')
//const authorize = require('./authorize')
////Not useful// req =>  middleware => res
////Not useful//app.use([ logger, authorize])
//// Not useful //app.use(express.static('./public'))

////Not useful// api/home/about/products

//app.use(morgan('tiny'))
//app.get('/', (req, res) =>{
 //   res.send('Home')
//})

//app.get('/about', (req,res) => {
  //  res.send('About')
//})

//app.get('/api/products', logger,(req,res) =>{
   // res.send('Products')
//})

//app.get('/api/items', [logger, authorize], (req,res) =>{
  //  console.log(req.user)
  //  res.send('Items')
//})


//app.listen(3000, () => {
   // console.log('server is listening on port 3000...')
//})
