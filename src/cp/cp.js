import { fork } from 'child_process';
import { join } from 'path';
import { stdin, stdout } from 'process';

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const scriptPath = join(__dirname, 'files', 'script.js');

  const child = fork(scriptPath, args, {
    silent: true,
  });

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);

  child.on('error', (err) => {
    console.error('Child process error:', err);
  });

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
    stdin.unpipe(child.stdin);
    child.stdout.unpipe(stdout);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['raz', 'dva', 'tri']);
