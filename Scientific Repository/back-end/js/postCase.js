"use strict";
require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Repository",
    password: "95028825",
    port: 5432
});
const PostCase = (req, res) => {
    // console.log(req.body.username);
    pool.query(`INSERT INTO "cases" (casename,datacase,noncoplanar) VALUES($1,$2,$3) RETURNING *`, [req.body.casename, req.body.datacase, req.body.noncoplanar], (err, respuesta) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(respuesta.rows[0].idcase);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].idcase }));
        }
    });
};
module.exports = {
    PostCase
};
