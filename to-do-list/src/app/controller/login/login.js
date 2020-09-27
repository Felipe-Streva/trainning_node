const createLogin = require('../../views/login/login')
const createNewUser = require('../../views/newUser/newUser')
const LoginModels = require('../../models/login/login');

const loginModels = new LoginModels()


class LoginController {

    static generateLogin(){
        return ((req,resp) => {
            resp.send(createLogin())
        })
    }

    static redirectToUserPage(){
        return ((req, resp) => {
            loginModels.validateUserLogin(req.body)
                .then(user => {
                    if(user.valid){
                        resp.redirect(`/${user.user_id}`)
                    } else{
                        resp.redirect(`/failLoggin`)
                    }
                })
                .catch(err => console.log(err))
           
        })
    }

    static generateNewUser(){
        return ((req,resp) => {
            resp.send(createNewUser())
        })
    }

    static insertNewUser(){
        return ((req,resp) => {
            loginModels.addUserInDB(req.body)
                .then(msg => {
                    console.log(msg)
                    resp.redirect(`/`)
                })
                .catch(err => {
                    console.log(err)
                    resp.redirect(`/newUser`)
                })
        })
    }

}

module.exports = LoginController
