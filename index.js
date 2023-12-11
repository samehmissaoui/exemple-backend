const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./user/root');
const cors = require('cors')

const app = express();

const port = 3001

// Other middleware and configurations

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());
app.use(cors({origin: '*', credentials: true}));
app.use('/users', userRoutes);


// Error handling middleware

app.listen(port, () =>{console.log(`server running on : http://localhost:${port}`)})

