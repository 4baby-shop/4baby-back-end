"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var log4js_1 = __importDefault(require("log4js"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var app = express_1["default"]();
var logger = log4js_1["default"].getLogger();
var port = process.env.PORT;
logger.level = process.env.LOG_LEVEL;
logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');
app.get('/', function (request, response) {
    response.send('Hellos world!');
});
app.listen(port, function () { return console.log("Running on port " + port); });
//# sourceMappingURL=index.js.map