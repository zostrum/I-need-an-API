import config from 'config';
import AbstractFileGenerator from '../../abstraction/AbstractFileGenerator';
import * as Templates from './templates';

class IndexFile extends AbstractFileGenerator {
  path = `${config.get('root_dir')}${config.get('src_dir')}`;

  getFilename = () => {
    return `${this.path}/index.js`;
  };

  generateFileContent = () => {
    this.filecontent = Templates.indexFile(config.get('ports.guest'));
  };

  workflow = [this.generateFileContent, this.saveFile];
}

export default IndexFile;
