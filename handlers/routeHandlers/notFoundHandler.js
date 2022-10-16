/*
* Title: Not found
* Description: This is a 404 not found handler
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// module scaffoding
const handler = {}


// handler function
handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL isn\'t Found!'
    })
}

module.exports = handler