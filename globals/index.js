import fetch from "node-fetch";
const [, , $1] = process.argv;

global.fetch = fetch;

global.$1 = $1;
