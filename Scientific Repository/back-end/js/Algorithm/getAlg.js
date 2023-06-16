"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Repository",
    password: "95028825",
    port: 5432
});
const GetAlg = (req, res) => {
    let listaAlg = new Array();
    pool.query(`SELECT * FROM "algorithm"`, (err, respuesta) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaAlg.push(row);
        }
        console.log(listaAlg);
        res.send(JSON.stringify({ "status": "ok", "items": listaAlg }));
    });
};
module.exports = {
    GetAlg
};
