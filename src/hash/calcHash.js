import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

  const hash = createHash('sha256');
  const readStream = createReadStream(filePath);

  try {
    await pipeline(readStream, hash);

    console.log(hash.digest('hex'));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
