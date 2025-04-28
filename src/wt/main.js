import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
  const __dirname = import.meta.dirname;

  const coreCount = cpus().length;
  const promises = [];

  for (let i = 0; i < coreCount; i++) {
    const prom = new Promise((resolve, reject) => {
      const worker = new Worker(join(__dirname, 'worker.js'), {
        workerData: 10 + i,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });

    promises.push(prom);
  }

  const results = await Promise.all(promises);

  console.log('Results:', results);
};

await performCalculations();
