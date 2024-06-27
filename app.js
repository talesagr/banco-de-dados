const express = require('express');
const bodyParser = require('body-parser');
const pointsRoutes = require('./src/routes/points');
const connectionsRoutes = require('./src/routes/connections');
const routesRoutes = require('./src/routes/routes');
const routeSegmentsRoutes = require('./src/routes/routeSegments');
const sequelize = require('./src/config/database')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())

//Routes
app.use('/api', pointsRoutes);
app.use('/api', connectionsRoutes);
app.use('/api', routesRoutes);
app.use('/api', routeSegmentsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))

sequelize.sync().then(()=>{
    console.log('Database Sucess');
}).catch(error => {
    console.error('Unable to connect database', error)
})