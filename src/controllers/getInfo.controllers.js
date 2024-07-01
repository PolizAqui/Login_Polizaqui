const { verifyUser } = require('../models/login.js');

const controller = {}

controller.login = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await verifyUser({ email });

        if (!user.status && user.message === 'User not found') {
            res.status(404).json({ error: 'Usuario no encontrado' });
        } else {
            res.status(user.code).json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error en el Servidor' });
    }
};

module.exports = controller;
