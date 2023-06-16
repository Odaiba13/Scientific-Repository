// require('dotenv').config();
// const Pool=require('pg').Pool;
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "Repository",
//     password: "95028825",
//     port: 5432
// });

const PostCancer= (req:any, res:any) => {
    // console.log(req.body.username);
    pool.query(`INSERT INTO "typeofcancer" (cancername,cancerdescription) VALUES($1,$2) RETURNING *`
    ,[req.body.cancername,req.body.cancerdescription], (err:any, respuesta:any)=>{
        if (err){
            console.log(err);
            return;
        }else{
            console.log(respuesta.rows[0].idcancer);
            res.send(JSON.stringify({"status":"ok","item":respuesta.rows[0].idcancer}));
        }
    })
}
module.exports={
    PostCancer
}