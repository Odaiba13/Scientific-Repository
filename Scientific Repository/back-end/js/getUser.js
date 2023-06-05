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
const GetUser = (req, res) => {
    let listaUsers = new Array();
    pool.query(`SELECT * FROM "users"`, (err, respuesta) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaUsers.push(row);
        }
        console.log(listaUsers);
        res.send(JSON.stringify({ "status": "ok", "items": listaUsers }));
    });
};
module.exports = {
    GetUser
};
