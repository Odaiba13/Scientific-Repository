import { Cancer } from "./Cancer";

require('dotenv').config();
const Pool=require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Repository",
    password: "95028825",
    port: 5432
});

const GetCancer= (req:any, res:any) => {
    let listaCancer=new Array<Cancer>();
    pool.query(`SELECT * FROM "typeofcancer"`, (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaCancer.push(row);
        }
         console.log(listaCancer);
        res.send(JSON.stringify({"status":"ok","items":listaCancer}));
    })
}

module.exports={
    GetCancer
}