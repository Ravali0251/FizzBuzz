import inquirer from "inquirer";
import handler from "./command.js";

const askInitialNumbers = () => {
  const questions = [
    {
      name: "numbers",
      type: "input",
      message: "Please Enter numbers array (comma separated eg: 2,3,4,5 )",
    },
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  while (true) {
    const { numbers } = await askInitialNumbers();
    handler(numbers);
  }
};

run();
