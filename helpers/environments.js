/*
* Title: Environments
* Description: Environments
* Author: Hasan Sharear
* Date: 13/10/2022
*/

// module scaffolding
const environments = {}

environments.staging = {
    port: 3000,
    envName: 'staging'
}

environments.production = {
    port: 5000,
    envName: 'production'
}

// determind whice environment varriable is passed
const currentEnviroment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport  =  typeof environments[currentEnviroment] === 'object' ? environments[currentEnviroment] : environments.staging

module.exports = environmentToExport