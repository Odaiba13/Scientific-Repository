import { User } from "./User"; 

require('dotenv').config();
const Pool=require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Repository",
    password: "95028825",
    port: 5432
});

const GetUser= (req:any, res:any) => {
    let listaUsers=new Array<User>();
    pool.query(`SELECT * FROM "users"`, (err:any, respuesta:any) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of respuesta.rows) {
            listaUsers.push(row);
        }
         console.log(listaUsers);
        res.send(JSON.stringify({"status":"ok","items":listaUsers}));
    })
}

module.exports={
    GetUser
}