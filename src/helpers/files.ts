import fs from 'fs';

const createFile = (filename: string, filecontent = '') => {
  fs.writeFileSync(filename, filecontent);
};

const deleteDir = (path: string) => {
  fs.rmSync(path, { recursive: true, force: true });
};

const createDir = (path: string) => {
  try {
    fs.mkdirSync(path);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw new Error(error.message);
    }
  }

  return true;
};

export { createFile, createDir, deleteDir };
