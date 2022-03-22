import { Entity } from '../../types/entity';
import config from 'config';
import * as Templates from './templates';
import AbstractFileGenerator from '../../abstraction/AbstractFileGenerator';

class StartupRoutesFile extends AbstractFileGenerator {
  entities: Entity[];
  path = `${config.get('root_dir')}${config.get('src_dir')}${config.get('dirs.startup')}`;
  filecontent = '';

  constructor(entities: Entity[]) {
    super();
    this.entities = entities;
  }

  generateImports = (): void => {
    let entityImports = '';
    this.entities.forEach((entity) => {
      entityImports += Templates.importEntitityStartupSection(entity.name);
    });
    this.filecontent += Templates.importStartupSection(entityImports);
  };

  generateExports = () => {
    let entityExports = '';
    this.entities.forEach((entity) => {
      entityExports += Templates.exportEntitityStartupSection(entity.name);
    });
    this.filecontent += Templates.exportStartupSection(entityExports);
  };

  // setEntities(entities: Entity[]) {
  //   this.entities = entities;
  //   return this;
  // }

  getFilename = () => {
    return `${this.path}/routes.js`;
  };

  workflow = [this.generateImports, this.generateExports, this.saveFile];
}

export default StartupRoutesFile;
