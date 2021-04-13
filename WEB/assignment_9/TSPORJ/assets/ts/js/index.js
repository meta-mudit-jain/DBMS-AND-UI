"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var PORT = 8080;
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.get('/', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs_1.readFile('./index.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        }
        else {
            res.write(data);
        }
        res.end();
    });
}).listen(PORT, function () { return console.log("Listening at port ", PORT); });
