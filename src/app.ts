import express from 'express';
import { prepareDirectoryStructure } from './bootstrap/filesystem';
import Generator from './generator/generator';
import config from 'config';
import { spawnApiProcess } from './helpers/process';

const app = express();

app.use(express.json());

app.post('/', (req, resp) => {
  prepareDirectoryStructure();
  const generator = new Generator(req.body);
  const promise = new Promise((resolve) => {
    generator.run();
    resolve(true);
  });
  
  promise
    .then(() => {
      spawnApiProcess();
    })
    .then(() => {
      resp.send('Passed');
    })
    .catch((err) => {
      console.log('err', err);
    });
});

const port = config.get('ports.host');
app.listen(port, () => console.log(`Listen on ${port}`));
