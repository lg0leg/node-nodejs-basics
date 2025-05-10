const parseArgs = () => {
  const skipPathArgs = process.argv.slice(2);
  const res = [];

  skipPathArgs.forEach((val, index, arr) => {
    if (val.startsWith('--')) {
      res.push(`${val.slice(2)} is ${arr[index + 1]}`);
    }
  });

  console.log(res.join(', '));
};

parseArgs();
