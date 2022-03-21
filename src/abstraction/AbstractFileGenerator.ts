import * as Files from '../helpers/files';
import { Executable } from './executable';

abstract class AbstractFileGenerator implements Executable{
  path: string;
  filecontent = '';

  abstract getFilename(): string;

  saveFile = () => {
    Files.createFile(this.getFilename(), this.filecontent);
  };

  workflow: { (): void }[];

  public run = () => {
    this.workflow.forEach((step) => {
      step();
    });
  };
}

export default AbstractFileGenerator;
