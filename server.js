const express  =  require('express')
const dbConnect = require('./dbConnect')
//const cors = require('cors');
const app =  express()
app.use(express.json())
const userRoute = require('./routes/usersRoute')
const transactionsRoute = require('./routes/transactionsRoute')
app.use('/api/users/' , userRoute)
app.use('/api/transactions/' , transactionsRoute)
//app.use(cors());
const port = 5000
app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))

