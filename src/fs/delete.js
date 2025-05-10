import { unlink } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fileToRemove = `${__dirname}/files/fileToRemove.txt`;

  try {
    await unlink(fileToRemove);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
