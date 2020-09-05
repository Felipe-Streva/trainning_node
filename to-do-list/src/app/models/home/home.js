const bd = require('../../../../database/bd')
const todoListToHTML = require('../../views/home/creatCards')

function generateUser(userPosition){
    const userCards = bd[userPosition]

    return todoListToHTML(userCards)
}

module.exports = generateUser;