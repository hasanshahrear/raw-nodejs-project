/*
* Title: Handle Req Res
* Description: Handle Request and Response
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// dependencis
const url = require('url')
const {StringDecoder} = require('string_decoder')
const routes = require('../routes')
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler')



// module scaffolding
const handler = {}

handler.handleReqRes = (req, res) =>{
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query
    const headersObject = req.headers


    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler

   


    const decoder = new StringDecoder('utf-8')
    let realData = ''

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)

    })

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500
        payload = typeof(payload) === 'object' ? payload : {}

        const payloadString = JSON.stringify(payload)

        // write final response
        res.writeHead(statusCode)
        res.end(payloadString)
    })

    req.on('end', ()=> {
        realData += decoder.end()
        res.end(realData);  
    })

   
}

module.exports = handler;