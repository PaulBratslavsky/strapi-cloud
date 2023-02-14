const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DB_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
