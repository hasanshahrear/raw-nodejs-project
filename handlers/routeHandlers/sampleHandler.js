/*
* Title: Sample Handler
* Description: This is a sample route handler function
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// module scaffoding
const handler = {}


// handler function
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {
        message: 'This is a sample URL'
    })
}

module.exports = handler