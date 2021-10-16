import sequelize from './utils/database.js';

import router from './routes/routes.js';
import express from 'express'; 
import session  from 'express-session'; 

import cors from 'cors';
const oneDay = 1000 * 60 * 60 * 24;
const app = express(); //Line 2

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);
sequelize.sync(); 


const port = process.env.PORT || 5000; //Line 3


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11