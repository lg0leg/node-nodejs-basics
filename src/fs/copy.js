import { cp } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const from = `${__dirname}/files`;
  const to = `${__dirname}/files_copy`;

  try {
    await cp(from, to, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
