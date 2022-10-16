/*
* Title: Routes
* Description: All routes defination is here
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')

// routes
const routes = {
    sample: sampleHandler
}

module.exports = routes