require('dotenv').config();

// const Pool=require('pg').Pool;
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "Repository",
//     password: "95028825",
//     port: 5432
// });

const PostUser= (req:any, res:any) => {
    // console.log(req.body.username);
    pool.query(`INSERT INTO "users" (username,userpassword,email,charge) VALUES($1,$2,$3,$4) RETURNING *`
    ,[req.body.username,req.body.userpassword,req.body.email,req.body.charge], (err:any, respuesta:any)=>{
        if (err){
            console.log(err);
            return;
        }else{
            console.log(respuesta.rows[0].iduser);
            res.send(JSON.stringify({"status":"ok","item":respuesta.rows[0].iduser}));
        }
    })
}

module.exports={
    PostUser
}