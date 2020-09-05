const generateUser = require('../../models/home/home')

function generateHome(userId){
    const idToPositionInArray = userId - 1;
    return generateUser(idToPositionInArray)
}


module.exports = generateHome;