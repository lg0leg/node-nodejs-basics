import { readdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const folderPath = `${__dirname}/files`;

  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
