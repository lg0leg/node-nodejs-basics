import { join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath, 'utf8');

  try {
    await pipeline(readStream, stdout);
  } catch (err) {
    throw new Error(err);
  }
};

await read();

//please use "node src/streams/read.js" instead of script if the console is empty
