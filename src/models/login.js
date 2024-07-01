const pool = require('../utils/mysql.connect.js');
const { PG_KEY } = require('../global/_var.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyUser = async ({ email }) => {
    try {
        let msg = {
            status: false,
            message: 'User not found',
            code: 404
        };

        const connection = await pool.getConnection();

        const sqlUser = 'SELECT id_usuario, nombre, email, telefono, provider, provider_id,password FROM usuarios WHERE email = ?';
        const [user] = await connection.execute(sqlUser, [email]);
       
        if (user.length > 0) {
            const currentDate = new Date();
            const dateCreated = currentDate.toISOString().split('T')[0];
            const dateExpires = new Date(currentDate.setDate(currentDate.getDate() + 7)).toISOString().split('T')[0];

            let TokenInfo = {
                id_usuario: user[0].id_usuario,
                nombre: user[0].nombre,
                email: user[0].email,
                telefono: user[0].telefono,
                date_created: dateCreated,
                date_expires: dateExpires
            };

            const token = jwt.sign(TokenInfo, PG_KEY, { algorithm: 'HS256' });

            msg = {
                status: true,
                message: 'Successful login',
                code: 200,
                infoUser: token
            };
        }

        connection.release();
        return msg;

    } catch (err) {
        console.error(err);
        return {
            status: false,
            message: 'Server error',
            code: 500,
            error: err
        };
    }
};

module.exports = {
    verifyUser
};
