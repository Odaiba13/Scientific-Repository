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
const GetCancer = (req, res) => {
    let listaCancer = new Array();
    pool.query(`SELECT * FROM "typeofcancer"`, (err, respuesta) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaCancer.push(row);
        }
        console.log(listaCancer);
        res.send(JSON.stringify({ "status": "ok", "items": listaCancer }));
    });
};
module.exports = {
    GetCancer
};
