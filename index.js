/*
* Title: Uptime Monitoring Application
* Description: RESTful Api  Monitoring
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// dependencis
const  http = require('http')
const {handleReqRes} = require('./helpers/handleReqRes')
const environments = require('./helpers/environments')

// app object  - module scaffolding
const app  = {}


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(environments.port, ()=> {
        console.log(`listening to port ${environments.port}`)
    })
}

// handle req res
app.handleReqRes = handleReqRes

// start server
app.createServer()