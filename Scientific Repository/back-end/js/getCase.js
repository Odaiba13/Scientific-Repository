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
const GetCase = (req, res) => {
    let listaCases = new Array();
    pool.query(`SELECT * FROM "cases"`, (err, respuesta) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaCases.push(row);
        }
        console.log(listaCases);
        res.send(JSON.stringify({ "status": "ok", "items": listaCases }));
    });
};
module.exports = {
    GetCase
};
