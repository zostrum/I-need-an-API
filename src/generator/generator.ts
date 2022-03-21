import Request from '../types/request';
import AbstractMasterGenerator from '../abstraction/abstractMasterGenerator';
import IndexFile from './indexfFile/indexFile';
import RouteFile from './routes/routeFile';
import { Executable } from '../abstraction/executable';

class Generator extends AbstractMasterGenerator {
  routeFile: RouteFile = new RouteFile();
  indexFile: IndexFile = new IndexFile();
  request: Request;

  constructor(request: Request) {
    super();
    this.request = request;
  }

  makeWorkflow = () => {
    const { entities } = this.request;
    entities.forEach((entity) => {
      this.workflow.push(new RouteFile().setRouteDefinition(entity));
    });
  };

  workflow: Executable[] = [new IndexFile()];
}

export default Generator;
