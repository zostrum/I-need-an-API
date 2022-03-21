import { Executable } from './executable';

abstract class AbstractMasterGenerator implements Executable{
  abstract makeWorkflow(): void;

  workflow: Executable[];

  public run = () => {
    this.makeWorkflow();

    this.workflow.forEach((fileGenerator) => {
      fileGenerator.run();
    });
  };
}

export default AbstractMasterGenerator;
