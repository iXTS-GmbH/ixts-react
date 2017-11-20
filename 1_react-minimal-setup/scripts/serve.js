console.log("SERVE")

const fork = require('child_process').fork;

const tsc = fork("./node_modules/typescript/bin/tsc", ["-w", "-p", "src/"]);
const server = fork("./node_modules/http-server/bin/http-server").on("close", () => tsc.kill());