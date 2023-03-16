import chalk from "chalk";
const wilders = [
	{ name: "Tom", color: "pink" },
	{ name: "Omar", color: "violet" },
	{ name: "Thomas", color: "yellow" },
	{ name: "Lena", color: "blue" },
];

console.log(chalk.blue(wilders[0].name))
console.log(chalk.red(wilders[1].name))
console.log(chalk.green(wilders[2].name))
console.log(chalk.yellow(wilders[3].name))
