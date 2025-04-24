import { readFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = `${__dirname}/files/fileToRead.txt`;

  try {
    const data = await readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
