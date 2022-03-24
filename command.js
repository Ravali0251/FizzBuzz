import chalk from "chalk";

const consolePrint = (input) => {
  if (Array.isArray(input)) {
    input.forEach((i) => {
      if (i.result !== -1) {
        console.log(chalk.yellow(`${i.number} : ${i.result}`));
      } else {
        console.log(chalk.yellow(`${i.number} : Divided ${i.number} by 3, Divided ${i.number} by 5`));
      }
    });
  } else {
    console.log(chalk.yellow(input));
  }
};

const handler = (cmdArgs) => {
  const nums = cmdArgs.split(",");

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const n = parseInt(nums[i]);

    if (isNaN(n)) {
      res.push({
        number: nums[i],
        result: 'Invalid Input'
      })
    } else {
      let result = -1

      if (((n % 3) === 0) && ((n % 5) === 0)) {
        result = 'FizzBuzz'
      } else if ((n % 3) === 0) {
        result = 'Fizz'
      } else if ((n % 5) === 0) {
        result = 'Buzz'
      }

      res.push({
        number: n,
        result
      })
    }


  }

  consolePrint(res)
};

export default handler;
