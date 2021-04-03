const sequelize = require('./conexion');

async function addProduct() {
    sequelize.query("INSERT INTO `restaurant`(`nombre`, `precio`) VALUES(")
}