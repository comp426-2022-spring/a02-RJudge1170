import { coinFlips, countFlips } from './modules/coin.mjs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require("minimist")(process.argv.slice(2));

args["number"];

const number = args.number || 1;

let result = coinFlips(number);

console.log(result);

console.log(countFlips(result));