const express =  require('express');
const usersRoutes = require('./src/users.js');
const app = express();

const port  = 3000;
// middleware to get and post response in json
app.use(express.json());
app.get('/', (_, res) => {
    res.send('Hello World');
});
app.use('/allusers', usersRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
