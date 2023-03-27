const express =require ('express');
const usersRoutes =require('./src/routes/users.routes');
const app = express();
const db = require("./src/models");
const port  = 3000;
app.use(express.json()); 
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use('/allusers',usersRoutes);
app.listen(port,() => console.log(`app listening on port ${port}`));
