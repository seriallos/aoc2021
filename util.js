import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

import _ from 'lodash';

export const getInput = async (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  const rawData = await fs.readFile(path.join(__dirname, 'input.txt'), 'utf8');
  const input = _.filter(_.split(rawData, '\n'));
  return input;
};
