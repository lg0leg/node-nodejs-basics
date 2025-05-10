import { join } from 'path';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const archiveFilePath = join(__dirname, 'files', 'archive.gz');
  const decompressedFilePath = join(__dirname, 'files', 'fileToCompress.txt');

  try {
    if (existsSync(archiveFilePath)) {
      const readStream = createReadStream(archiveFilePath);
      const writeStream = createWriteStream(decompressedFilePath);
      const gunzipStream = createGunzip();

      await pipeline(readStream, gunzipStream, writeStream);

      console.log('File successfully decompressed');
    } else {
      console.log('Please create file "archive.gz"');
    }
  } catch (err) {
    throw new Error(err);
  }
};

await decompress();
