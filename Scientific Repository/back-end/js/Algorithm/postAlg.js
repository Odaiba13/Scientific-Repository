"use strict";
// require('dotenv').config();
// const Pool=require('pg').Pool;
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "Repository",
//     password: "95028825",
//     port: 5432
// });
const PostAlg = (req, res) => {
    pool.query(`INSERT INTO "algorithm" (algorithminfo,algorithmfile) VALUES($1,$2) RETURNING *`, [req.body.algorithminfo, req.body.algorithmfile], (err, respuesta) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(respuesta.rows[0].idalgorithm);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].idalgorithm }));
        }
    });
};
module.exports = {
    PostAlg
};
