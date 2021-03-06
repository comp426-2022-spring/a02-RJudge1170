import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require("minimist")(process.argv.slice(2));

args["call"];

const call = args.call || 'failed';

if (!(call === 'heads' || call === 'tails'  || call == 'failed')) {

    console.log('Usage: node guess-flip --call=[heads|tails]')

} else if (call === 'failed') {

    console.log('Error: no input');

} else {

    console.log(flipACoin(call));

}