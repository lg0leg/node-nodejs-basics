import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const __dirname = import.meta.dirname;
  const fileToCompressPath = join(__dirname, 'files', 'fileToCompress.txt');
  const archiveFilePath = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(fileToCompressPath);
  const writeStream = createWriteStream(archiveFilePath);
  const gzipStream = createGzip();

  try {
    await pipeline(readStream, gzipStream, writeStream);
    console.log('File successfully compressed');
  } catch (err) {
    throw new Error(err);
  }
};

await compress();
