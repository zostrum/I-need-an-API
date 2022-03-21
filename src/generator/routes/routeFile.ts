import { Entity } from '../../types/entity';
import { Route } from '../../types/route';
import config from 'config';
import * as Templates from './templates';
import AbstractFileGenerator from '../../abstraction/AbstractFileGenerator';

class RouteFile extends AbstractFileGenerator {
  entity: Entity;
  path = `${config.get('root_dir')}${config.get('src_dir')}${config.get(
    'dirs.routes'
  )}`;
  filecontent = '';

  generateImports = (): void => {
    this.filecontent += Templates.importsection;
  };

  genereateRoute = (route: Route): void => {
    this.filecontent += Templates.endpointection(route);
  };

  genereateRoutes = (): void => {
    let routesSection = '';
    const routes = this.getRoutes();

    routes.forEach((route: Route) => {
      routesSection += this.genereateRoute(route);
    });

    this.filecontent += routesSection;
  };

  generateExports = () => {
    this.filecontent += Templates.exportSection;
  };

  setRouteDefinition(entity: Entity) {
    this.entity = entity;
    return this;
  }

  getRoutes = (): Route[] => {
    return this.entity.routes;
  };

  getFilename = () => {
    return `${this.path}/${this.entity.name}.js`;
  };

  workflow = [
    this.generateImports,
    this.genereateRoutes,
    this.generateExports,
    this.saveFile,
  ];
}

export default RouteFile;
