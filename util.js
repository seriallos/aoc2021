import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

import _ from 'lodash';

export const getInput = async (day, filename) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const rawData = await fs.readFile(path.join(__dirname, `day${day}`, filename), 'utf8');
    const input = _.filter(_.split(rawData, '\n'));
    return input;
  } catch (err) {
    const e = new Error(`Day ${day} ${filename} cannot be loaded`);
    e.cause = err;
    throw e;
  }
};
