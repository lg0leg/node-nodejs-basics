import { join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stdin } from 'process';

const write = async () => {
  const __dirname = import.meta.dirname;
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath, 'utf8');

  try {
    await pipeline(stdin, writeStream);
  } catch (err) {
    throw new Error(err);
  }
};

await write();

//use "ctrl + C" to to stop writing
