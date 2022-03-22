import { Route } from '../../types/route';

export const importsection = `const express = require("express");
const router = express.Router();
\n`;

export const endpointection = (route: Route) => {
  return `router.${route.method}("${route.path}", async (req, resp) => {
  resp.send('${route.responce}');
});
\n`;
};

export const exportSection = `module.exports = router;\n`;

export const importEntitityStartupSection = (entity: string) => {
  return `const ${entity} = require('../routes/${entity}');\n`;
};

export const importStartupSection = (imports: string) => {
  return `const express = require('express');\n${imports}`;
};

export const exportEntitityStartupSection = (entity: string) => {
  return `
  app.use('/api/${entity}', ${entity});`;
};

export const exportStartupSection = (exports: string) => {
  return `\nmodule.exports = function(app) {
  app.use(express.json());
  ${exports}
}`;
};
