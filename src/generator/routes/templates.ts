import { Route } from '../../types/route';

const importsection = `const express = require("express");
const router = express.Router();
\n`;

const endpointection = (route: Route) => {
  return `router.${route.method}("${route.path}", async (req, resp) => {
  resp.send('${route.responce}');
});
\n`;
};

const exportSection = `module.exports = router;\n`;

export { importsection, endpointection, exportSection };
