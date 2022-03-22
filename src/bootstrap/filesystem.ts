import * as Files from '../helpers/files';
import config from 'config';

const srcDir = `${config.get('root_dir')}${config.get('src_dir')}`;
const rootDir = `${config.get('root_dir')}`;

const createGuestRootDir = () => {
  Files.createDir(rootDir);
};
const removeSrcDir = () => {
  Files.deleteDir(srcDir);
};
const createSrcDir = () => {
  Files.createDir(srcDir);
};
const createSubDirs = () => {
  const dirs: { [key: string]: string; } = config.get('dirs');

  for (const key in dirs) {
    Files.createDir(`${srcDir}${dirs[key]}`);
  }
}

const prepareDirectoryStructure = () => {
  createGuestRootDir();
  removeSrcDir();
  createSrcDir();
  createSubDirs();
};

export { prepareDirectoryStructure };
