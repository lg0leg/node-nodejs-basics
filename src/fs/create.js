import { writeFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = `${__dirname}/files/fresh.txt`;

  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
