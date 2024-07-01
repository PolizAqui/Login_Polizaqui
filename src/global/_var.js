require('dotenv').config()

/********* SERVER *******/

const PORT  =  process.env.PORT

/********** DATABASE **********/

const PG_HOST = process.env._HOST
const PG_USER = process.env._USER
const PG_PASS = process.env._PASS
const PG_NAME = process.env._NAME

/*********** KEY **********/

const PG_KEY  = process.env.KEY

/*********** USER ************/

const LOGIN   = process.env.LOGIN


module.exports = {
    //SERVER
    PORT,
    //DATABASE
    PG_HOST, PG_NAME, PG_PASS, PG_USER,
    //KEY
    PG_KEY,
    //USER
    LOGIN,
}
