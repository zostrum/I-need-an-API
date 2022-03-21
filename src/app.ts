import express from 'express';
import { prepareDirectoryStructure } from './filesystem';
import Generator from './generator/generator';
import config from 'config';

const app = express();

app.use(express.json());

app.post('/', (req, resp) => {
  prepareDirectoryStructure();
  const generator = new Generator(req.body);
  generator.run();

  resp.send('Passed');
});

const port = config.get('ports.host');
app.listen(port, () => console.log(`Listen on ${port}`));
