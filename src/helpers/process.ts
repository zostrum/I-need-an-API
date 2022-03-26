import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
let cmd: ChildProcessWithoutNullStreams | undefined;

export const spawnApiProcess = () => {
  if (cmd === undefined) {
    cmd = spawn('nodemon', ['../api/src/index.js']);
  }
};
