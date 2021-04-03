const express = require('express');
const app = express();
const sequelize = require('./conexion');
const PORT = 3000;

async function findAllRows() {
    sequelize.query("SELECT * FROM `restaurant`", { type: sequelize.QueryTypes.SELECT })
        .then(function (productos) {
            console.log(productos);
        })
}

findAllRows()

app.listen(PORT, function () {
    console.log(`Sistema armado en el puerto:${PORT}`);
});