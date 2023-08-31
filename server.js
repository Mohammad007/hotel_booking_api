const app = require('./app')
const { PORT } = require('./config/config');
const DB = require('./db/db');

DB.then(res => {
    console.log('Database is connect')
}).catch(err => {
    console.log('Database is not connect')
})

app.listen(PORT, () => {
    console.log("Server is running..", PORT);
})