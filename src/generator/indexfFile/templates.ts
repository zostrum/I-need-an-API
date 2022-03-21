const indexFile = (port: number) => {
  return `const express = require("express");
const app = express();

require("./startup/routes")(app);

const port = ${port};
const server = app.listen(port, () => {
  console.log('Listening on port ${port}...');
});

module.exports = server;
`;
};

export { indexFile };
