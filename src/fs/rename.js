import { rename as renameFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const wrongFilename = `${__dirname}/files/wrongFilename.txt`;
  const properFilename = `${__dirname}/files/properFilename.md`;

  try {
    await renameFile(wrongFilename, properFilename);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
