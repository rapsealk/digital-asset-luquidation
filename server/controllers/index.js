const db = require('../utils/database');

const authController = require('./auth');
const userController = require('./user');

exports.get = async (req, res, next) => {

    try {
        var conn = await db.getConnection();
        let query = 'SELECT * FROM User';
        let users = await conn.query(query);
        console.log('users:', users);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await db.releaseConnection(conn);
    }

    res.json(200, { message: 'Hello world!' });
};

exports.auth = authController;
exports.user = userController;