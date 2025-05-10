import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const createReverseTransform = () => {
    return new Transform({
      transform(chunk, _, callback) {
        const reversed = chunk.toString().split('').reverse().join('') + '\n\n';
        callback(null, reversed);
      },
    });
  };

  console.log('Enter text:');

  const reverseTransform = createReverseTransform();

  try {
    stdin.pipe(reverseTransform).pipe(stdout);
  } catch (err) {
    throw new Error(err);
  }
};

await transform();

//use "ctrl + C" to to stop transform
