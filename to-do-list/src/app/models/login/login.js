const db = require('../../../../database/bd')

const LoginDao = require('../../../../database/DAO/login/loginDao')

const loginDao = new LoginDao(db)

class LoginModels{
    validateUserLogin(body){
        return loginDao.findRowPerEmail(body.email)
            .then(row => {
                if(row.length == 0){ 
                    return {
                        "valid": false,
                        "user_id": false
                    }
                } else {
                    let user = {
                        "valid": this.validation(body.password, row[0].password),
                        "user_id": row[0].user_id
                    }
                    return user
                }
                
            })
            .catch(err => console.log(err))

    }

    validation(passwordInput, passwordBD){
        if(passwordBD == passwordInput) return true;
        return false;
    }

    addUserInDB(body){
        return loginDao.addUser(body)
    }
}

module.exports = LoginModels