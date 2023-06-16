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
const PostTreatment = (req, res) => {
    // console.log(req.body.username);
    pool.query(`INSERT INTO "treatment" (treatmentinfo,numberofbeams) VALUES($1,$2) RETURNING *`, [req.body.treatmentinfo, req.body.numberofbeams], (err, respuesta) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(respuesta.rows[0].idtreatment);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].idtreatment }));
        }
    });
};
module.exports = {
    PostTreatment
};
