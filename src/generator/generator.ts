import Request from '../types/request';
import AbstractMasterGenerator from '../abstraction/abstractMasterGenerator';
import IndexFile from './indexfFile/indexFile';
import RouteFile from './routes/routeFile';
import StartupRoutesFile from './routes/StartupRoutesFile';
import { Executable } from '../abstraction/executable';

class Generator extends AbstractMasterGenerator {
  request: Request;

  constructor(request: Request) {
    super();
    this.request = request;
  }

  makeWorkflow = () => {
    const { entities } = this.request;
    entities.forEach((entity) => {
      this.workflow.push(new RouteFile(entity));
    });
    this.workflow.push(new StartupRoutesFile(entities));
  };

  workflow: Executable[] = [new IndexFile()];
}

export default Generator;
