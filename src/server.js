const config = require('./config/config');
const app = require('./app');

const port = config.port || 4040;
const server = app.listen(port, console.log(`App listening in port ${port}`));

module.exports = server;
