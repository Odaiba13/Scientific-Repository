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
const GetTreatment = (req, res) => {
    let listaTreatment = new Array();
    pool.query(`SELECT * FROM "treatment"`, (err, respuesta) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaTreatment.push(row);
        }
        console.log(listaTreatment);
        res.send(JSON.stringify({ "status": "ok", "items": listaTreatment }));
    });
};
module.exports = {
    GetTreatment
};
