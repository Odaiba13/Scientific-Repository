import { Case } from "./Case";

require('dotenv').config();
const Pool=require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Repository",
    password: "95028825",
    port: 5432
});

const GetCase= (req:any, res:any) => {
    let listaCases=new Array<Case>();
    pool.query(`SELECT * FROM "cases"`, (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaCases.push(row);
        }
         console.log(listaCases);
        res.send(JSON.stringify({"status":"ok","items":listaCases}));
    })
}

module.exports={
    GetCase
}